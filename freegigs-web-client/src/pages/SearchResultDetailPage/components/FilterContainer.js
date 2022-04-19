import styled from "styled-components";

const Container = styled.div`
  height: 600px;
  width: 18%;
  padding-left: 50px;
  margin-left: 50px;
  margin-right: 50px;
  position: relative;
  padding-top: 20px;
`;

const BrandLogo = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 20px;
  font-weight: 800;
  padding-top: 10px;
  padding-bottom: 20px;
`;

const TitleText = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 20px;
  color: black;
  font-weight: 600;
  padding-bottom: 15px;
`;

const SubTitleText = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 15px;
  color: black;
  font-weight: 600;
  padding-bottom: 7.5px;
`;

const EmptyBox = styled.div`
  height: 20px;
`;

const CheckBoxText = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 12.5px;
  color: black;
  font-weight: 500;
  padding-left: 15px;
`;

const CheckBoxContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin-bottom: 7.5px;
`;

const CheckBox = styled.input`
  height: 15px;
  width: 15px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 15px;
  color: black;
  font-weight: 600;
`;

const SaveButton = styled.button`
  height: 40px;
  width: 150px;
  background-color: black;
  border: ${(props) => (props.error ? "1.5px solid red" : "1px solid #CCC")};
  border-radius: 5px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 17.5px;
  color: white;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
`;

const FilterContainer = ({setService, setMinPrice, setMaxPrice, handleOnFilter}) => {

    const handlePriceChange = (minPrice, maxPrice) => {
        setMaxPrice(maxPrice);
        setMinPrice(minPrice);
    }

    return (
        <Container>
            <BrandLogo>FreeGigs</BrandLogo>
          
            <TitleText>Filter</TitleText>
            <SubTitleText>Categories</SubTitleText>
            <CheckBoxContainer>
                <CheckBox
                        type = "checkbox"
                        onClick={() => setService("Web Design")}
                    />
                <CheckBoxText>Web Design</CheckBoxText>
            </CheckBoxContainer>
            <CheckBoxContainer>
                <CheckBox
                        type = "checkbox"
                        onClick={() => setService("App Design")}            
                    />
                <CheckBoxText>App Design</CheckBoxText>
            </CheckBoxContainer>
            <CheckBoxContainer>
                <CheckBox
                        type = "checkbox"
                        onClick={() => setService("UX Design")}  
                    />
                <CheckBoxText>UX Design</CheckBoxText>
            </CheckBoxContainer>
            <CheckBoxContainer>
                <CheckBox
                        type = "checkbox"
                        onClick={() => setService("Icon Design")} 
                    />
                <CheckBoxText>Icon Design</CheckBoxText>
            </CheckBoxContainer>
            <CheckBoxContainer>
                <CheckBox
                        type = "checkbox"
                        onClick={() => setService("UX Design")} 
                    />
                <CheckBoxText>Photoshop Editing</CheckBoxText>
            </CheckBoxContainer>
            <CheckBoxContainer>
                <CheckBox
                        type = "checkbox"              
                        onClick={() => setService("UX Design")} 
                    />
                <CheckBoxText>Flyer Design</CheckBoxText>
            </CheckBoxContainer>
            <CheckBoxContainer>
                <CheckBox
                        type = "checkbox"              
                        onClick={() => setService("UX Design")} 
                    />
                <CheckBoxText>Poster Design</CheckBoxText>
            </CheckBoxContainer>
            <EmptyBox />

            <SubTitleText>Price</SubTitleText>
            <CheckBoxContainer>
                <CheckBox
                        type = "checkbox" 
                        onClick={() => handlePriceChange(1, 20)}
                    />
                <CheckBoxText>RM 1 - RM 20</CheckBoxText>
            </CheckBoxContainer>
            <CheckBoxContainer>
                <CheckBox
                        type = "checkbox" 
                        onClick={() => handlePriceChange(20, 50)}
                    />
                <CheckBoxText>RM 20 - RM 50</CheckBoxText>
            </CheckBoxContainer>
            <CheckBoxContainer>
                <CheckBox
                        type = "checkbox" 
                       onClick={() => handlePriceChange(50, 100)}
                    />
                <CheckBoxText>RM 50 - RM 100</CheckBoxText>
            </CheckBoxContainer>
            <CheckBoxContainer>
                <CheckBox
                        type = "checkbox" 
                        onClick={() => handlePriceChange(100, 200)}
                    />
                <CheckBoxText>RM 100 - RM 200</CheckBoxText>
            </CheckBoxContainer>
            <CheckBoxContainer>
                <CheckBox
                        type = "checkbox" 
                        onClick={() => handlePriceChange(200, 500)}
                    />
                <CheckBoxText>RM 200 - RM 500</CheckBoxText>
            </CheckBoxContainer>
            <CheckBoxContainer>
                <CheckBox
                        type = "checkbox" 
                        onClick={() => handlePriceChange(500, 9999)}
                    />
                <CheckBoxText>RM 500 ++</CheckBoxText>
            </CheckBoxContainer>
            <EmptyBox />
    
            <SaveButton onClick={handleOnFilter}>Filter</SaveButton>

        </Container>
      );
};

export default FilterContainer;