import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
`;

export const LookupScheduleForm = styled.form`
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`;

export const FormGroup = styled.div`
    width: 100%;
    margin-bottom: 20px;
`;

export const Label = styled.label`
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
`;

export const FormControl = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

export const CheckboxLabel = styled.label`
    font-size: 16px;
    display: flex;
    align-items: center;
`;

export const Checkbox = styled.input`
    margin-right: 10px;
`;

export const SearchButton = styled.button`
    width: 100%;
    padding: 15px;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 18px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

export const TransitContainer = styled.section`
    width: 100%;
    max-width: 1000px;
    border: 2px solid #ddd; 
    border-collapse: collapse;
`;

export const TransitRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    border-bottom: 2px solid #ddd; 
    width: 100%;

    &:nth-child(odd) {
        background-color: #ffffff;
    }

    &:nth-child(even) {
        background-color: #f0f8ff; 
    }
`;

export const TransitCell = styled.div`
    flex: 1;
    text-align: left;
`;
