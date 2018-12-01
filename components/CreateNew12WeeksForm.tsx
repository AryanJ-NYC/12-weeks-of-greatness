import { Button } from '@material-ui/core';
import { Form, Scope } from 'informed';
import Centered from '../components/Centered';
import MaterialText from '../components/MaterialTextField';

function New12WeekYearFormContent() {
  return (
    <Centered>
      <Scope scope="goals[0]">
        <MaterialText label="Goal Name" id="goal-name" field="name" type="text" required />
        <MaterialText label="Tactic Name" id="tactic-name" field="tactics[0].name" type="text" required />
      </Scope>
      <MaterialText
        label="Start Date"
        id="start-date"
        field="startDate"
        type="date"
        InputLabelProps={{ shrink: true }}
        required
      />
      <Button type="submit">Submit</Button>
    </Centered>
  );
}

export default ({ handleSubmit }) => (
  <Form component={New12WeekYearFormContent} onSubmit={handleSubmit} />
);
