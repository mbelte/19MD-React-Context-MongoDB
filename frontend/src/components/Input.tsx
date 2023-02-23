
export type InputProps = {
    value: string;
    placeholder: string;
    required: boolean;
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({value, placeholder, required, onChange}: InputProps) => {
  return (
    <input 
        type="text" 
        className='tasks__input'
        value={ value }
        placeholder={ placeholder }
        required={ required }
        onChange={ onChange }
    />
  )
};

export default Input;
