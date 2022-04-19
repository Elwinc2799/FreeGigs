import React, { useCallback, useState} from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";
import styled from "styled-components";

const Container = styled.div`
  background-color: transparent;
  width: fit-content;
  height: fit-content;
`;

const EarningsPieChart = (props) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    payload,
    percent,
    value,
  } = props;

  return (
    <g>
      <text
        x={cx}
        y={cy - 25}
        dy={8}
        textAnchor="middle"
        fontSize="32px"
        fontFamily="Nunito Sans"
        fontWeight="600"
        color="black"
      >
        {`RM${value}`}
      </text>
      <text
        x={cx}
        y={cy + 5}
        dy={8}
        textAnchor="middle"
        fontSize="18px"
        fontFamily="Nunito Sans"
        fontWeight="700"
        color="black"
      >
        {payload.name}
      </text>
      <text
        x={cx}
        y={cy + 35}
        dy={8}
        textAnchor="middle"
        fontSize="14px"
        fontFamily="Nunito Sans"
        fontWeight="300"
        color="black"
      >
        {`${(percent * 100).toFixed(2)}%`}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={payload.color}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={payload.color}
      />
    </g>
  );
};

export default function App({allData}) {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <Container>
      <PieChart width={250} height={250}>
        <Pie
          activeIndex={activeIndex}
          activeShape={EarningsPieChart}
          data={allData}
          cx="50%"
          cy="50%"
          innerRadius={90}
          outerRadius={110}
          dataKey="value"
          onMouseEnter={onPieEnter}
          startAngle={450}
          endAngle={90}
        >
          {allData.map((data) => (
            <Cell key={data.name} fill={data.color} />
          ))}
        </Pie>
      </PieChart>
    </Container>
  );
}
