import React, {useState} from "react";
import {Box, Button, Container, Paper, styled} from "@mui/material";



let num: number = Math.random() * 1000;
let position: number = Math.random() * 10;



export const ScapeButton: React.FC<{}>= () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ScapeFunction = () => {
    const newX = Math.random() * (window.innerWidth - 100);
    const newY = Math.random() * (window.innerHeight - 100);
    setPosition({ x: newX, y: newY });
  };

  return (
    <div style={{ position: 'absolute', left: position.x, top: position.y }}>
      <Button variant={"contained"}
              onClick={ScapeFunction}>
        Scape
      </Button>
    </div>
  );
};
