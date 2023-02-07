import { func, string, number } from 'prop-types';

import './styles.scss';

const InputSlider = ({ name, value, label, onChange }) => {
  const handleOnChange = e => {
    onChange && onChange(name, e.target.value);
  };

  return (
    <div className="slider-container">
      {label && <label className="label-style">{`${label}:`}</label>}
      <label>0</label>
      <input
        className="slider"
        type="range"
        min={0}
        max={100}
        value={value}
        name={name}
        step={1}
        onChange={handleOnChange}
      />
      <label>100</label>
    </div>
  );
};

InputSlider.propTypes = {
  name: string.isRequired,
  label: string,
  onChange: func.isRequired,
  value: number.isRequired,
};

InputSlider.defaultProps = {
  label: '',
};

export default InputSlider;
