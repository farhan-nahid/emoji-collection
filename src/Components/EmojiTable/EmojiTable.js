import React from "react";
import { Container, Table } from "react-bootstrap";
import fakeData from "../../Fakedata/fakedata.json";

const EmojiTable = () => {
  const emojiData = fakeData.filter((data) => data != null);
  console.log(emojiData);

  return (
    <Container>
      <Table className="table" striped bordered hover size="md">
        <thead>
          <tr>
            <th>id</th>
            <th>Code</th>
            <th>Emoji Name</th>
            <th>Browser</th>
            <th>Facebook</th>
            <th>Google</th>
            <th>Twitter</th>
          </tr>
        </thead>
        {
          // all data
          emojiData.map((emoji) => {
            return (
              <tbody key={emoji.id}>
                <tr>
                  <td>{emoji.id}</td>
                  <td>{emoji.code}</td>
                  <td>{emoji.name}</td>
                  <td>{emoji.browser}</td>
                  <td>
                    <img
                      style={{ width: "20px" }}
                      src={emoji.fb}
                      alt={emoji.name}
                    />
                  </td>
                  <td>
                    <img
                      style={{ width: "20px" }}
                      src={emoji.google}
                      alt={emoji.name}
                    />
                  </td>
                  <td>
                    <img
                      style={{ width: "20px" }}
                      src={emoji.twitter}
                      alt={emoji.name}
                    />
                  </td>
                </tr>
              </tbody>
            );
          })
        }
      </Table>
    </Container>
  );
};

export default EmojiTable;
