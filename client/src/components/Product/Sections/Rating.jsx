import styled from "styled-components";

const Container = styled.div`
  margin-top: 20px;
  /* background-color: #f8f9fa; */
  padding: 1rem 2rem;
  border-radius: 8px;
  /* box-shadow: 0px 0px 18px 1px rgba(0, 0, 0, 0.1); */
`;
const Row = styled.div`
  display: flex;
  gap: 30px;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;
const RatingText = styled.span`
  font-size: 38px;
  font-weight: 500;
  color: #343a40;
`;
const StarsRow = styled.div`
  display: flex;
`;
const Star = styled.img`
  width: 24px;
`;
const Graph = styled.div`
  display: flex;
  flex-direction: column;
`;
const GraphRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
const GraphText = styled.span`
  color: #212529;
  font-weight: 500;
  font-size: 15px;
`;
const ProgressBar = styled.div`
  width: 175px;
  height: 4px;
  background-color: #adb5bd;
`;
const Progress = styled.div`
  height: 100%;
  width: ${(props) => props.width}%;
  background-color: #0074e9;
`;
const RatingTextLighter = styled.span`
  font-size: 26px;
  color: #6c757d;
`;

const Rating = () => {
  return (
    <Container>
      <Row>
        <Header>
          <RatingText>
            5.6 <RatingTextLighter>/6</RatingTextLighter>
          </RatingText>
          <StarsRow>
            <Star src="/assets/star.svg" />
            <Star src="/assets/star.svg" />
            <Star src="/assets/star.svg" />
            <Star src="/assets/star.svg" />
            <Star src="/assets/star.svg" />
            <Star src="/assets/halfstar.svg" />
          </StarsRow>
        </Header>
        <Graph>
          <GraphRow>
            <GraphText>6</GraphText>
            <Star src="/assets/star.svg" />
            <ProgressBar>
              <Progress width="72" />
            </ProgressBar>
            <GraphText>57</GraphText>
          </GraphRow>
          <GraphRow>
            <GraphText>5</GraphText>
            <Star src="/assets/star.svg" />
            <ProgressBar>
              <Progress width="14" />
            </ProgressBar>
            <GraphText>57</GraphText>
          </GraphRow>
          <GraphRow>
            <GraphText>4</GraphText>
            <Star src="/assets/star.svg" />
            <ProgressBar>
              <Progress width="43" />
            </ProgressBar>
            <GraphText>57</GraphText>
          </GraphRow>
          <GraphRow>
            <GraphText>3</GraphText>
            <Star src="/assets/star.svg" />
            <ProgressBar>
              <Progress width="49" />
            </ProgressBar>
            <GraphText>57</GraphText>
          </GraphRow>
          <GraphRow>
            <GraphText>2</GraphText>
            <Star src="/assets/star.svg" />
            <ProgressBar>
              <Progress width="80" />
            </ProgressBar>
            <GraphText>57</GraphText>
          </GraphRow>
          <GraphRow>
            <GraphText>1</GraphText>
            <Star src="/assets/star.svg" />
            <ProgressBar>
              <Progress width="2" />
            </ProgressBar>
            <GraphText>43</GraphText>
          </GraphRow>
        </Graph>
      </Row>
    </Container>
  );
};

export default Rating;
