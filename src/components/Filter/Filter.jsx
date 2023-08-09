import PropTypes from 'prop-types';
import { FilterStyled } from './Filter.styled';
import { Label, Input } from 'components/ContactForm/ContactForm.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterStyld>
      <Label>Find contsct by name</Label>
      <Input type="text" name="filter" value={value} onChange={onChange} />
    </FilterStyld>
  );
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
