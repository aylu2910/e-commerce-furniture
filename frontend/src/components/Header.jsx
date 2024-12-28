import Column from "./Column";
import Row from "./Row";
export const Header = () => {
  return (
    <Column>
      <Row>
        <h1 style={{ margin: 0, padding: 0 }}> Ecommerce App</h1>
        <Row>
          <button>cart</button>
          <button>Sign Up</button>
          <button>Sign In</button>
        </Row>
      </Row>
    </Column>
  );
};
