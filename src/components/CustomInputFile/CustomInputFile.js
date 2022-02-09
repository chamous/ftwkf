import React, {useCallback, useRef, useState} from 'react';
import {ImUpload2} from 'react-icons/im';
import styled from 'styled-components';

const CustomInputFile = (
    {
        handleChange,
        acceptedExtensions,
        backgroundColor = '#3699ff',
        textColor = '#fff',
        text = 'Selecione um arquivo',
        width = '250px',
        classes,
        ...props
    }) => {
    const [logo, setLogo] = useState();
    const inputFileRef = useRef();

    const handleClick = useCallback(() => {
        if (inputFileRef && inputFileRef.current) {
            inputFileRef.current.click();
        }
    }, []);

    const handleChangeFile = useCallback((event) => {
        const fileUploaded = event.target.files[0];
        setLogo(fileUploaded);
        if (handleChange) {
            handleChange(event);
        }
    }, [handleChange]);

    return (
        <>
            <Button
                type="button"
                onClick={handleClick}
                className={classes}
                style={{background: backgroundColor, color: textColor, width: width}}
            >
                <ImUpload2 size={18} color={textColor}/>
                &nbsp;
                {!logo ? text : logo?.name}
            </Button>
            <input
                type="file"
                accept={acceptedExtensions}
                ref={inputFileRef}
                style={{display: 'none'}}
                onChange={handleChangeFile}
                {...props}
            />
        </>
    );
}
export default CustomInputFile;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  text-align: center;
  font-size: 15px;
  font-weight: 650;
  border: 0;
  outline: 0;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;