//chakra-ui
import {
  Flex,
  Box,
  Table,
  Checkbox,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  Image
} from '@chakra-ui/react';
import * as React from 'react';

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
import { IStatisticalTeam } from '@/interfaces';

const columnHelper = createColumnHelper<IStatisticalTeam>();

interface TableTeamProps {
  statisticalTeams: IStatisticalTeam[];
}

const TableTeam = (props: TableTeamProps) => {
  const { statisticalTeams } = props;

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');
  let defaultData: IStatisticalTeam[] = statisticalTeams;
  const columns = [
    columnHelper.accessor('_id', {
      id: '_id',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '10px' }}
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
    columnHelper.accessor('team', {
      id: 'team',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '10px' }}
          color="#75C2F6"
        >
          Name
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
    columnHelper.accessor('matches', {
      id: 'matches',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '10px' }}
          color="black"
        >
          Matches
        </Text>
      ),
      cell: info => (
        <Text color={textColor} fontSize="sm" fontWeight="700">
          {info.getValue()}
        </Text>
      )
    }),
    columnHelper.accessor('WDL', {
      id: 'WDL',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '10px' }}
          color="black"
          minW="80px"
        >
          W - D - L
        </Text>
      ),
      cell: info => (
        <Text color={textColor} fontSize="sm" fontWeight="700" minW="80px">
          {info.getValue()}
        </Text>
      )
    }),
    columnHelper.accessor('goals', {
      id: 'goals',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '10px' }}
          color="black"
          minW="80px"
        >
          Goals Scored
        </Text>
      ),
      cell: info => (
        <Text color={textColor} fontSize="sm" fontWeight="700" minW="80px">
          {info.getValue()}
        </Text>
      )
    }),
    columnHelper.accessor('losts', {
      id: 'losts',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '10px' }}
          color="black"
          minW="90px"
        >
          Goals Conceded
        </Text>
      ),
      cell: info => (
        <Text color={textColor} fontSize="sm" fontWeight="700" minW="90px">
          {info.getValue()}
        </Text>
      )
    }),
    columnHelper.accessor('owns', {
      id: 'owns',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '10px' }}
          color="black"
          minW="70px"
        >
          Own Goals
        </Text>
      ),
      cell: info => (
        <Text color={textColor} fontSize="sm" fontWeight="700" minW="70px">
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
          fontSize={{ sm: '10px', lg: '10px' }}
          color="black"
          minW="90px"
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
      id: 'redCards',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '10px' }}
          color="black"
          minW="80px"
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
          Team Statistics
        </Text>
      </Flex>
      <Box>
        <Table variant="simple" color="gray.500" mb="24px" mt="10px">
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
                    >
                      <Flex
                        justifyContent="space-between"
                        align="center"
                        fontSize={{ sm: '10px', lg: '10px' }}
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
          <Tbody>
            {table
              .getRowModel()
              .rows.slice(0, 11)
              .map((row, index: number) => {
                return (
                  <Tr
                    key={row.id}
                    bgColor={index % 2 === 0 ? 'gray.200' : 'white'}
                  >
                    {row.getVisibleCells().map(cell => {
                      return (
                        <Td
                          key={cell.id}
                          fontSize={{ sm: '14px' }}
                          minW={{ sm: '150px', md: '200px', lg: 'auto' }}
                          borderColor="transparent"
                          textAlign="center"
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
        </Table>
      </Box>
    </Box>
  );
};

export default TableTeam;
