import style from './buttonGroup.module.css';
import Button from 'react-bootstrap/Button';

export const ButtonGroup = ({ formNumber, setKey }) => {
  console.log(setKey);
  return (
    <div className={style.buttonGroup}>
      <Button
        variant="outline-primary"
        disabled={formNumber == '1' ? true : false}
        onClick={() => setKey(prev => (Number(prev) - 1).toString())}
      >
        Back
      </Button>
      <Button type="submit" variant="outline-primary" name="saveButton">
        Save
      </Button>
      <Button
        type="submit"
        variant="outline-primary"
        name="saveAndNextButton"
        disabled={formNumber == '3' ? true : false}
      >
        Save & Next
      </Button>
    </div>
  );
};
