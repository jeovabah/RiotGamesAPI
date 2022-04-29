import styled from "@emotion/styled";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2rem;
    div {
        text-align: center;
        label {
            width: 100%;
            color: #fff;
            font-size: 1.2rem;
            font-weight: bold;
        }
        input {
            width: 100%;
            margin-bottom: 1rem;
            margin-top: .5rem;
            height: 1.5rem;
            
            padding: 0 2rem;
        }
        button {
            background-color: #456;
            border-radius: 5px;
            padding: 1rem;
            cursor: pointer;
            transition: filter 0.5s;
            margin-bottom: 2rem;
            border: none;
            font-weight: bold;
            color: #fff;
        }
        button:hover {
            filter: brightness(0.8);
        }
    }
`