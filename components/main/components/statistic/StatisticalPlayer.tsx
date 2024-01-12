import * as React from 'react';

//chakra-ui
import {
  Avatar,
  Box,
  Center,
  Flex,
  Image,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue
} from '@chakra-ui/react';

//table
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable
} from '@tanstack/react-table';

//interface
import NotData from '@/components/common/notData';
import { IPlayer, IStatisticalPLayer } from '@/interfaces';

const columnHelper = createColumnHelper<IStatisticalPLayer>();

interface TablePlayerProps {
  statisticalPlayers: IStatisticalPLayer[];
}
let defaultData: IStatisticalPLayer[] = [];

const TablePlayer = (props: TablePlayerProps) => {
  const { statisticalPlayers } = props;
  console.log(statisticalPlayers);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');

  if (statisticalPlayers) {
    defaultData = statisticalPlayers;
  }

  const columns = [
    columnHelper.accessor('_id', {
      id: '_id',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="black"
        >
          No
        </Text>
      ),
      cell: ({ row, table }) =>
        (table
          .getSortedRowModel()
          ?.flatRows?.findIndex(flatRow => flatRow.id === row.id) || 0) + 1
    }),
    columnHelper.accessor('player', {
      id: 'player',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="#75C2F6"
        >
          Player
        </Text>
      ),
      cell: info => (
        <Flex align="center">
          <Text color="green" fontSize="sm" fontWeight="700">
            {(info.getValue() as IPlayer)?.name}
          </Text>
        </Flex>
      )
    }),
    columnHelper.accessor('player', {
      id: 'player',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="black"
        >
          Number
        </Text>
      ),
      cell: info => (
        <Box position="relative">
          <Avatar src={(info.getValue() as IPlayer)?.avatar} size="lg" />
          <Box
            position="absolute"
            top="0"
            bgColor="green.400"
            rounded="full"
            w="20px"
            h="20px"
          >
            <Text color="white" fontSize="sm" fontWeight="700">
              {(info.getValue() as IPlayer)?.number}
            </Text>
          </Box>
        </Box>
      )
    }),
    columnHelper.accessor('team', {
      id: 'team',
      header: () => (
        <Text
          justifyContent="space-between"
          textAlign="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="black"
        >
          Team
        </Text>
      ),
      cell: info => (
        <Flex alignItems="center" justifyContent="flex-start" gap="20px">
          <Image src={info?.getValue()?.flag} alt="" boxSize="30px" />
          <Text color="green" fontSize="sm" fontWeight="700" textAlign="left">
            {info.getValue()?.name}
          </Text>
        </Flex>
      )
    }),
    columnHelper.accessor('goals', {
      id: 'goals',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="#75C2F6"
          minW="100px"
        >
          Goals Scored
        </Text>
      ),
      cell: info => (
        <Text color={textColor} fontSize="sm" fontWeight="700">
          {info.getValue()}
        </Text>
      )
    }),
    columnHelper.accessor('owner', {
      id: 'owner',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="black"
          minW="100px"
        >
          Own Goals
        </Text>
      ),
      cell: info => (
        <Text color={textColor} fontSize="sm" fontWeight="700">
          {info.getValue()}
        </Text>
      )
    }),
    columnHelper.accessor('yellowCards', {
      id: 'yellowCards',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="black"
          minW="100px"
        >
          Yellow Cards
        </Text>
      ),
      cell: info => (
        <Text color={textColor} fontSize="sm" fontWeight="700">
          {info.getValue()}
        </Text>
      )
    }),
    columnHelper.accessor('redCards', {
      id: 'RedCards',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="black"
          minW="100px"
        >
          Red Cards
        </Text>
      ),
      cell: info => (
        <Text color={textColor} fontSize="sm" fontWeight="700">
          {info.getValue()}
        </Text>
      )
    })
  ];
  const [data, setData] = React.useState(() => [...defaultData]);
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting
    },
    manualPagination: true,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true
  });

  return (
    <Box
      flexDirection="column"
      w="100%"
      px="0px"
      overflowX={{ sm: 'scroll', lg: 'hidden' }}
    >
      <Flex px="25px" mb="8px" justifyContent="space-between" align="center">
        <Text
          color={textColor}
          fontSize="22px"
          mb="4px"
          fontWeight="700"
          lineHeight="100%"
        >
          Player Statistics
        </Text>
      </Flex>
      <Box>
        <Table variant="simple" color="gray.500" mb="24px" mt="12px">
          <Thead>
            {table.getHeaderGroups().map(headerGroup => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  return (
                    <Th
                      key={header.id}
                      colSpan={header.colSpan}
                      pe="10px"
                      borderColor={borderColor}
                      cursor="pointer"
                      onClick={header.column.getToggleSortingHandler()}
                      _hover={{ bgColor: 'gray.200' }}
                    >
                      <Flex
                        justifyContent="space-between"
                        align="center"
                        fontSize={{ sm: '10px', lg: '12px' }}
                        color="black"
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: '',
                          desc: ''
                        }[header.column.getIsSorted() as string] ?? null}
                      </Flex>
                    </Th>
                  );
                })}
              </Tr>
            ))}
          </Thead>
          {defaultData.length ? (
            <Tbody>
              {table.getRowModel().rows.map((row, index: number) => {
                return (
                  <Tr
                    key={row.id}
                    textAlign="center"
                    bgColor={index % 2 !== 0 ? 'gray.300' : 'white'}
                  >
                    {row.getVisibleCells().map(cell => {
                      return (
                        <Td
                          key={cell.id}
                          fontSize={{ sm: '14px' }}
                          minW={{ sm: '150px', md: '200px', lg: 'auto' }}
                          borderColor="transparent"
                          textAlign="center"
                          // cursor="pointer"
                          onClick={() => console.log(row.original)}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </Td>
                      );
                    })}
                  </Tr>
                );
              })}
            </Tbody>
          ) : (
            <Center mt="500px">
              <NotData text="data statisticalPlayer" />
            </Center>
          )}
        </Table>
      </Box>
    </Box>
  );
};

export default TablePlayer;
