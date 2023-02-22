import styled from 'styled-components';

const TableCommon = ({ init, items, lastItemColor }) => {
  return (
    <TableContainer>
      <Table>
        <THead>
          <Tr>
            {init.head.map(el => (
              <Th key={el}>{el}</Th>
            ))}
          </Tr>
        </THead>
        <Tbody>
          {items.map(item => {
            return (
              <Tr border key={item._id} lastItemColor={lastItemColor}>
                {init.initItems.map(el => (
                  <Td key={el.label}>
                    {el.obj ? item[el.value[0]][el.value[1]] : item[el.value]}
                  </Td>
                ))}
                {/* <Td>{item.goods}</Td>
                <Td>{item.bonus}</Td>
                <Td>{item.dateData.hours}</Td> */}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableCommon;

const TableContainer = styled.div`
  max-height: 80vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 2px;
    margin-right: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: none;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #2da0e8;
    border-radius: 10px;
  }
`;

const Table = styled.table`
  /* color: white; */
  /* min-width: 350px; */
  width: 100%;
  font-weight: 500;

  /* border-collapse: collapse; */
  table-layout: fixed;

  /* @media (min-width: 1280px) {
    width: 713px;
  } */
`;

const THead = styled.thead`
  position: sticky;
  top: 0;
  /* display: flex;
  flex-direction: column; */

  /* width: 100px; */
`;

const Tbody = styled.tbody``;

const Tr = styled.tr`
  background-color: #92d5fe;
  color: black;

  :last-child {
    color: ${({ lastItemColor }) => (lastItemColor ? 'white' : 'black')};
    background-color: ${({ lastItemColor }) =>
      lastItemColor ? '#2da0e8' : '#92d5fe'};
  }

  /* border-bottom: ${p => p.border && '1px #DCDCDF solid'}; */
`;

const Th = styled.th`
  background-color: #2da0e8;
  color: white;

  font-size: 16px;
  line-height: 27px;

  /* padding: 16px 20px 15px 20px; */

  padding-top: 6px;
  padding-bottom: 5px;
  :first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  :last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

const Td = styled.td`
  /* color: black; */

  text-align: center;
  /* padding-top: 5px; */
  /* padding-bottom: 5px; */

  /* background-color: red; */

  font-size: 16px;
  line-height: 24px;

  :first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  :last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;
