import {
  createTournament,
  getPrizes,
  getReferees,
  getSponsors,
  getStadiums,
  getTeams
} from '@/apis';
import { AdminLayout } from '@/components/layout';
import {
  PrizeItem,
  PrizeModal,
  RefereeItem,
  RefereeModal,
  StadiumItem,
  StadiumModal,
  TeamItem,
  TeamModal
} from '@/components/league';
import { maxTeamOptions } from '@/constants';
import {
  CreateTournamentPayload,
  ETypeFormulaTour,
  ETypeVisionTour,
  IPrize,
  IReferee,
  ISponsor,
  IStadium,
  ITeam,
  NextPageWithLayout
} from '@/interfaces';
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Select,
  Text,
  useToast
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery } from '@tanstack/react-query';
import { CldUploadWidget } from 'next-cloudinary';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { LuPlus } from 'react-icons/lu';
import * as z from 'zod';

const createLeagueSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Name is required' })
    .max(1000, { message: 'Name must be less than 1000 characters' }),
  formula: z.nativeEnum(ETypeFormulaTour),
  vision: z.nativeEnum(ETypeVisionTour),
  prizes: z.array(z.string()).nonempty('You must add at least 1 prize'),
  teams: z.array(z.string()),
  stadiums: z.array(z.string()).nonempty('You must add at least 1 stadium'),
  referees: z.array(z.string()).nonempty('You must add at least 1 referee'),
  sponsor: z.string(),
  maxTeam: z.any()
});

const CreateLeague: NextPageWithLayout = () => {
  const toast = useToast();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPrizeModalOpen, setIsPrizeModalOpen] = useState<boolean>(false);
  const [selectedPrizes, setSelectedPrizes] = useState<IPrize[]>([]);
  const [isTeamModalOpen, setIsTeamModalOpen] = useState<boolean>(false);
  const [selectedTeams, setSelectedTeams] = useState<ITeam[]>([]);
  const [isRefereeModalOpen, setIsRefereeModalOpen] = useState<boolean>(false);
  const [selectedReferees, setSelectedReferees] = useState<IReferee[]>([]);
  const [isStadiumModalOpen, setIsStadiumModalOpen] = useState<boolean>(false);
  const [selectedStadiums, setSelectedStadiums] = useState<IStadium[]>([]);

  const [logo, setLogo] = useState<string>('');
  const [image, setImage] = useState<string>('');

  const { data: sponsors } = useQuery<ISponsor[]>({
    queryKey: ['sponsors'],
    queryFn: getSponsors!,
    initialData: []
  });

  const { data: prizes } = useQuery<IPrize[]>({
    queryKey: ['prizes'],
    queryFn: getPrizes!,
    initialData: []
  });

  const { data: teams } = useQuery<ITeam[]>({
    queryKey: ['teams'],
    queryFn: getTeams!,
    initialData: []
  });

  const { data: referees } = useQuery<IReferee[]>({
    queryKey: ['referees'],
    queryFn: getReferees!,
    initialData: []
  });

  const { data: stadiums } = useQuery<IStadium[]>({
    queryKey: ['stadiums'],
    queryFn: getStadiums!,
    initialData: []
  });

  // 1. Define your form.
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors }
  } = useForm<z.infer<typeof createLeagueSchema>>({
    resolver: zodResolver(createLeagueSchema),
    defaultValues: {
      name: '',
      formula: ETypeFormulaTour.ROUND_FIGHT,
      vision: ETypeVisionTour.DOMESTIC,
      sponsor: '',
      maxTeam: maxTeamOptions[0].value,
      prizes: [],
      teams: [],
      referees: [],
      stadiums: []
    }
  });

  useEffect(() => {
    (() => {
      const selectedPrizeIds = watch('prizes');
      setSelectedPrizes(
        prizes.filter(item => selectedPrizeIds.includes(item._id!))
      );
    })();
  }, [watch('prizes')]);

  useEffect(() => {
    (() => {
      const selectedTeamIds = watch('teams');
      setSelectedTeams(
        teams.filter(item => selectedTeamIds.includes(item._id!))
      );
    })();
  }, [watch('teams')]);

  useEffect(() => {
    (() => {
      const selectedRefereeIds = watch('referees');
      setSelectedReferees(
        referees.filter(item => selectedRefereeIds.includes(item._id!))
      );
    })();
  }, [watch('referees')]);

  useEffect(() => {
    (() => {
      const selectedStadiumIds = watch('stadiums');
      setSelectedStadiums(
        stadiums.filter(item => selectedStadiumIds.includes(item._id!))
      );
    })();
  }, [watch('stadiums')]);

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof createLeagueSchema>) {
    setIsLoading(true);
    try {
      const payload: CreateTournamentPayload = { ...values } as any;
      payload.logo = logo;
      payload.image = image;
      payload.maxTeam = Number.parseInt(payload.maxTeam as any);

      await createTournament(payload);

      setIsLoading(false);
      toast({
        title: 'Create new tournament successfully!',
        status: 'success',
        duration: 500,
        position: 'top-right'
      });
    } catch (error) {
      setIsLoading(false);
      toast({
        title: 'Failed to create new tournament!',
        status: 'error',
        duration: 500,
        position: 'top-right'
      });
    }
  }

  return (
    <Box padding={16} margin={16} bg="white" rounded="lg">
      <Box>
        <Heading mb={2}>Create League</Heading>
        <Text color="gray.600">Please fill out all valid information.</Text>
      </Box>

      <Divider orientation="horizontal" my={4} />

      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box flexDirection="column">
            <Flex gap={12} mb={16}>
              <Box w={1 / 4}>
                <CldUploadWidget
                  uploadPreset="soccer_upload"
                  options={{
                    folder: 'samples',
                    sources: ['local', 'url', 'google_drive'],
                    multiple: false,
                    styles: {}
                  }}
                  onSuccess={(result: any) => {
                    setLogo(result.info.secure_url);
                    console.log(
                      'modalData backgroundImage:: ' + result.info.secure_url
                    );
                  }}
                  onError={error => {
                    console.log(error);
                  }}
                >
                  {({ open }) => {
                    return (
                      <div className="h-[120px] w-full md:h-[380px]">
                        <FormLabel
                          ms="4px"
                          fontSize="md"
                          fontWeight="bold"
                          htmlFor="logo"
                        >
                          Logo
                        </FormLabel>
                        <div className="relative mt-2 h-[90%] w-full rounded bg-gray-200 border-2 border-solid border-gray-200">
                          <button
                            className="relative h-full w-full flex items-center justify-center overflow-hidden"
                            onClick={e => {
                              e.preventDefault();
                              open();
                            }}
                          >
                            <Image
                              src={
                                logo
                                  ? logo
                                  : '/images/landing/icon_tournament.png'
                              }
                              objectFit="cover"
                              alt="Default Logo Image"
                              className="rounded"
                            />
                          </button>
                        </div>
                      </div>
                    );
                  }}
                </CldUploadWidget>
              </Box>
              <Grid templateColumns="repeat(2, 1fr)" gap={4} width={3 / 4}>
                <GridItem colSpan={2}>
                  <FormControl isInvalid={Boolean(errors.name)}>
                    <FormLabel
                      ms="4px"
                      fontSize="md"
                      fontWeight="bold"
                      htmlFor="email"
                    >
                      Name
                    </FormLabel>
                    <Input
                      fontSize="sm"
                      ms="4px"
                      borderRadius="15px"
                      type="name"
                      placeholder="Please enter league name"
                      size="lg"
                      id="name"
                      {...register('name')}
                    />
                    <FormErrorMessage>
                      {errors.name && errors.name.message}
                    </FormErrorMessage>
                  </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                  <FormControl isInvalid={Boolean(errors.formula)}>
                    <FormLabel
                      ms="4px"
                      fontSize="md"
                      fontWeight="bold"
                      htmlFor="formula"
                    >
                      Formula
                    </FormLabel>
                    <Select
                      id="formula"
                      fontSize="sm"
                      ms="4px"
                      borderRadius="15px"
                      size="lg"
                      {...register('formula')}
                    >
                      <option value={ETypeFormulaTour.ROUND_FIGHT}>
                        Round fight
                      </option>
                      <option value={ETypeFormulaTour.STAGE}>Stage</option>
                      <option value={ETypeFormulaTour.TABLE}>Table</option>
                    </Select>
                    <FormErrorMessage>
                      {errors.formula && errors.formula.message}
                    </FormErrorMessage>
                  </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                  <FormControl isInvalid={Boolean(errors.vision)}>
                    <FormLabel
                      ms="4px"
                      fontSize="md"
                      fontWeight="bold"
                      htmlFor="vision"
                    >
                      Vision
                    </FormLabel>
                    <Select
                      id="vision"
                      fontSize="sm"
                      ms="4px"
                      borderRadius="15px"
                      size="lg"
                      {...register('vision')}
                    >
                      <option value={ETypeVisionTour.DOMESTIC}>Domestic</option>
                      <option value={ETypeVisionTour.INTERNATIONAL}>
                        International
                      </option>
                    </Select>
                    <FormErrorMessage>
                      {errors.vision && errors.vision.message}
                    </FormErrorMessage>
                  </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                  <FormControl isInvalid={Boolean(errors.maxTeam)}>
                    <FormLabel
                      ms="4px"
                      fontSize="md"
                      fontWeight="bold"
                      htmlFor="maxTeam"
                    >
                      Max teams
                    </FormLabel>
                    <Select
                      id="maxTeam"
                      fontSize="sm"
                      ms="4px"
                      borderRadius="15px"
                      size="lg"
                      placeholder="Please select max of teams quantity"
                      {...register('maxTeam')}
                    >
                      {maxTeamOptions.map(item => (
                        <option key={item.id} value={item.value}>
                          {item.value}
                        </option>
                      ))}
                    </Select>
                    <FormErrorMessage>
                      {errors.maxTeam && errors.maxTeam.message}
                    </FormErrorMessage>
                  </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                  <FormControl isInvalid={Boolean(errors.sponsor)}>
                    <FormLabel
                      ms="4px"
                      fontSize="md"
                      fontWeight="bold"
                      htmlFor="sponsor"
                    >
                      Sponsor
                    </FormLabel>
                    <Select
                      id="sponsor"
                      fontSize="sm"
                      ms="4px"
                      borderRadius="15px"
                      size="lg"
                      {...register('sponsor')}
                    >
                      <option value={''}>None</option>
                      {sponsors.map(item => (
                        <option key={item._id} value={item._id}>
                          {item.name}
                        </option>
                      ))}
                    </Select>
                    <FormErrorMessage>
                      {errors.sponsor && errors.sponsor.message}
                    </FormErrorMessage>
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl isInvalid={Boolean(errors.teams)}>
                    <FormLabel
                      ms="4px"
                      fontSize="md"
                      fontWeight="bold"
                      htmlFor="teams"
                      onClick={() => setIsTeamModalOpen(true)}
                    >
                      <Flex alignItems="center" gap={4}>
                        <Text w={20}>Teams</Text>
                        <Button
                          colorScheme="green"
                          w={44}
                          leftIcon={<LuPlus />}
                        >
                          Add Teams
                        </Button>
                      </Flex>
                    </FormLabel>
                    <TeamModal
                      disabled={watch('teams').length >= watch('maxTeam')}
                      isOpen={isTeamModalOpen}
                      onClose={() => setIsTeamModalOpen(false)}
                      teams={teams}
                      selectedTeamIds={watch('teams')}
                      register={register('teams')}
                    />
                    <FormErrorMessage>
                      {errors.teams && errors.teams.message}
                    </FormErrorMessage>
                  </FormControl>
                  <Flex gap={4} flexWrap="wrap">
                    {selectedTeams.map(item => (
                      <TeamItem key={item._id} team={item} />
                    ))}
                  </Flex>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl isInvalid={Boolean(errors.referees)}>
                    <FormLabel
                      ms="4px"
                      fontSize="md"
                      fontWeight="bold"
                      htmlFor="referees"
                      onClick={() => setIsRefereeModalOpen(true)}
                    >
                      <Flex alignItems="center" gap={4}>
                        <Text w={20}>Referees</Text>
                        <Button
                          colorScheme="green"
                          w={44}
                          leftIcon={<LuPlus />}
                        >
                          Add Referees
                        </Button>
                      </Flex>
                    </FormLabel>
                    <RefereeModal
                      isOpen={isRefereeModalOpen}
                      onClose={() => setIsRefereeModalOpen(false)}
                      referees={referees}
                      register={register('referees')}
                    />
                    <FormErrorMessage>
                      {errors.referees && errors.referees.message}
                    </FormErrorMessage>
                  </FormControl>
                  <Flex gap={4} flexWrap="wrap">
                    {selectedReferees.map(item => (
                      <RefereeItem key={item._id} referee={item} />
                    ))}
                  </Flex>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl isInvalid={Boolean(errors.stadiums)}>
                    <FormLabel
                      ms="4px"
                      fontSize="md"
                      fontWeight="bold"
                      htmlFor="stadiums"
                      onClick={() => setIsStadiumModalOpen(true)}
                    >
                      <Flex alignItems="center" gap={4}>
                        <Text w={20}>Stadiums</Text>
                        <Button
                          colorScheme="green"
                          w={44}
                          leftIcon={<LuPlus />}
                        >
                          Add Stadiums
                        </Button>
                      </Flex>
                    </FormLabel>
                    <StadiumModal
                      isOpen={isStadiumModalOpen}
                      onClose={() => setIsStadiumModalOpen(false)}
                      stadiums={stadiums}
                      register={register('stadiums')}
                    />
                    <FormErrorMessage>
                      {errors.stadiums && errors.stadiums.message}
                    </FormErrorMessage>
                  </FormControl>
                  <Flex gap={4} flexWrap="wrap">
                    {selectedStadiums.map(item => (
                      <StadiumItem key={item._id} stadium={item} />
                    ))}
                  </Flex>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl isInvalid={Boolean(errors.prizes)}>
                    <FormLabel
                      ms="4px"
                      fontSize="md"
                      fontWeight="bold"
                      htmlFor="prizes"
                      onClick={() => setIsPrizeModalOpen(true)}
                    >
                      <Flex alignItems="center" gap={4}>
                        <Text w={20}>Prizes</Text>
                        <Button
                          colorScheme="green"
                          w={44}
                          leftIcon={<LuPlus />}
                        >
                          Add Prizes
                        </Button>
                      </Flex>
                    </FormLabel>
                    <PrizeModal
                      isOpen={isPrizeModalOpen}
                      onClose={() => setIsPrizeModalOpen(false)}
                      prizes={prizes}
                      register={register('prizes')}
                    />
                    <FormErrorMessage>
                      {errors.prizes && errors.prizes.message}
                    </FormErrorMessage>
                  </FormControl>
                  <Flex gap={4} flexWrap="wrap">
                    {selectedPrizes.map(item => (
                      <PrizeItem key={item._id} prize={item} />
                    ))}
                  </Flex>
                </GridItem>

                <GridItem colSpan={2}>
                  <Box className="w-full">
                    <CldUploadWidget
                      uploadPreset="soccer_upload"
                      options={{
                        folder: 'samples',
                        sources: ['local', 'url', 'google_drive'],
                        multiple: false,
                        styles: {}
                      }}
                      onSuccess={(result: any) => {
                        setImage(result.info.secure_url);
                        console.log(
                          'modalData backgroundImage:: ' +
                            result.info.secure_url
                        );
                      }}
                      onError={error => {
                        console.log(error);
                      }}
                    >
                      {({ open }) => {
                        return (
                          <div className="h-[180px] w-full">
                            <FormLabel
                              ms="4px"
                              fontSize="md"
                              fontWeight="bold"
                              htmlFor="logo"
                            >
                              Image
                            </FormLabel>
                            <div className="relative mt-2 h-[90%] rounded w-full bg-gray-200 border-2 border-solid border-gray-200">
                              <button
                                className="relative h-full w-full flex items-center justify-center overflow-hidden rounded"
                                onClick={e => {
                                  e.preventDefault();
                                  open();
                                }}
                              >
                                <Image
                                  src={
                                    image
                                      ? image
                                      : '/images/landing/background2.jpg'
                                  }
                                  objectFit="cover"
                                  alt="Default Image"
                                  className="rounded"
                                />
                              </button>
                            </div>
                          </div>
                        );
                      }}
                    </CldUploadWidget>
                  </Box>
                </GridItem>
              </Grid>
            </Flex>
            <Button
              type="submit"
              bg="#0079FF"
              color="white"
              fontWeight="bold"
              w="100%"
              h="45"
              _hover={{
                bg: '#75C2F6'
              }}
              _active={{
                bg: 'teal.400'
              }}
              isLoading={isLoading}
            >
              Create
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

CreateLeague.Layout = AdminLayout;

export default CreateLeague;
