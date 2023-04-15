import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductImgContainer = styled.div`
  padding: 1rem;
  margin: 1rem;
  gap: 12px;
  display: flex;
  flex-direction: column;
`;

export const InformationContainer = styled.div`
  flex: 1;
`;

export const InformationHeader = styled.div`
  padding: 8px 4px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 80px;
`;

export const InformationHeaderReview = styled.div`
  display: flex;
  height: 25px;
  display: flex;
  align-items: center;
`;

export const InformationRow = styled.div`
  display: flex;
`;

export const DetailsContainer = styled.div`
  width: 280px;
`;

export const SummaryContainer = styled.div`
  margin: 0px 20px;
  width: 340px;
`;

export const DetailsSection = styled.div`
  border-top: 1px solid #adb5bd;
  padding: 12px 8px;
`;

export const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Li = styled.li``;

export const ContainerButtonsRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ButtonsRow = styled.div`
  display: flex;
  gap: 8px;
`;

export const SectionMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 8px;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 65px;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #adb5bd;
`;
export const DropdownButton = styled.div`
  padding: 8px 10px;
  border-radius: 8px;
  background-color: ${(props) => (props.selected ? "#E8EBED" : "#fff")};
  transition: 0.1s;
  cursor: pointer;
  &:hover {
    background-color: #e8ebed;
  }
`;

export const Arrow = styled.i`
  border: solid #495057;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
`;

export const RowButton = styled.div`
  border-radius: 8px;
  border: ${(props) => (props.selected ? "1px solid #343A40" : "1px solid #adb5bd")};
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 6px 8px;
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    border: 1px solid #495057;
  }
`;

export const SummaryHeader = styled.div`
  padding: 0px 8px;
  margin-bottom: 12px;
`;

export const SummaryRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const SectionMenuButton = styled.div`
  border-radius: 8px;
  border: 1px solid #adb5bd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 8px;
  cursor: pointer;
`;

export const SummaryHeart = styled.img`
  width: 25px;
  cursor: pointer;
`;

export const SummarySelect = styled.div`
  border: 1px solid #adb5bd;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 400;
  padding: 10px;
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    border: 1px solid #495057;
  }
`;

export const SummaryButton = styled.button`
  border: none;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #0063c6;
  border-bottom: 1px solid #0063c6;
  padding: 12px 58px;
  cursor: pointer;
  color: #e9ecef;
  font-weight: 400;
  font-size: 18px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  &:hover {
    background-color: #0055aa;
  }
`;

export const SummarySection = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 8px;
  border-bottom: 1px solid #adb5bd;
  gap: 8px;
`;

export const SummaryHeaderIcon = styled.img`
  width: 32px;
  padding: 4px;
  border-radius: 50%;
  transition: 0.1s;
  cursor: pointer;
  &:hover {
    background-color: #e8ebed;
  }
`;

export const ProductHeader = styled.div`
  border-bottom: 1px solid #adb5bd;
  padding: 8px 19px;
  margin-top: 50px;
  width: 100%;
  display: flex;
  gap: 8px;
`;

export const ProductContainer = styled.div`
  display: flex;
`;

export const NavigateSpan = styled.span`
  color: #495057;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

export const NavigateSpanSlash = styled.span`
  color: #495057;
  font-weight: 600;
`;

export const SummarySectionIcon = styled.img`
  width: 25px;
`;

export const ProductImgFooter = styled.div`
  display: flex;
  justify-content: center;
`;
export const ImgSelect = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 12px;
  border: 1px solid #adb5bd;
  cursor: pointer;
  &:hover {
    border: 1px solid #495057;
  }
`;
export const ImgContainer = styled.div`
  width: 1100;
  height: 720px;
  cursor: pointer;
`;
