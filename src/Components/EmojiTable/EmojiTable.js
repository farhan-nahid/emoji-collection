import React from "react";
import { Container, Table } from "react-bootstrap";
import fakeData from "../../Fakedata/fakedata.json";

const EmojiTable = () => {
  const emojiData = fakeData.filter((data) => data != null);

  return (
    <Container>
      <Table className="text-center" striped bordered hover size="md">
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
            const { id, code, name, browser, fb, google, twitter } = emoji;
            return (
              <tbody key={id}>
                <tr>
                  <td>{id}</td>
                  <td>{code}</td>
                  <td>{name}</td>
                  <td>{browser}</td>
                  <td>
                    <img style={{ width: "20px" }} src={fb} alt="" />
                  </td>
                  <td>
                    <img style={{ width: "20px" }} src={google} alt="" />
                  </td>
                  <td>
                    <img style={{ width: "20px" }} src={twitter} alt="" />
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
