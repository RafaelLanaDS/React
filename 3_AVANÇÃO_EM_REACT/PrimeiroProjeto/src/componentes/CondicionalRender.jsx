import { useState } from "react";

const CondicionalRender = () => {
    const [x] = useState(true);

    return (
    <div>
      <h1>Isso sera exibido?</h1>
      {x && <p>se x for true sim</p>}
      {!x && <p>agora x é falso</p>}
    </div>
  );
};

export default CondicionalRender
