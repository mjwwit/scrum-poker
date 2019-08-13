import * as React from 'react'
import { RadioGroup, Input, InputLabel, FormControl, FormControlLabel, Radio, Container, Button } from '@material-ui/core';
import { timeout } from 'q';

interface FormState {
    name: string;
    scheme: string;
    timeout: number;
}
export default function Room() {
    // const [name, setName] = React.useState<FormState>({
    const [name, setName] = React.useState('Name');
    const [custom, setCustom] = React.useState('Custom');
    //     name: "",
    //     scheme: "",
    //     timeout: 0
    // });


    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function handleChangeCustom(event: React.ChangeEvent<HTMLInputElement>) {
        setCustom(event.target.value);
    }

    return <div>
        <Container maxWidth="sm">
            <h2>Create a new room</h2>
            <FormControl>
                <InputLabel htmlFor="component-simple">Name:</InputLabel>
                <Input id="component-simple" value={name} onChange={handleChange} />
            </FormControl>
            <br />
            <RadioGroup>
                <InputLabel htmlFor="component-simple">Card Schema:</InputLabel>
                <FormControlLabel value="female" control={<Radio />} label="Regular (0, .5, 1, 2, 3, 5, 8, 13, 20, ...)" />
                <FormControlLabel value="male" control={<Radio />} label="Fibonacci (0, 1, 2, 3, 5, 8, 13, 21, ...)" />
                <FormControlLabel value="other" control={<Radio />} label="Custom" />
                <FormControl>
                    <Input id="component-simple" value={custom} onChange={handleChangeCustom} />
                </FormControl>
            </RadioGroup>

            <FormControl>
                <InputLabel htmlFor="component-simple">Estimation timeout:</InputLabel>
                <Input id="component-simple" value={timeout} onChange={handleChange} />
            </FormControl>
            <br />
            <Button variant="contained" >
                Create room
            </Button>
        </Container>
    </div>


}

