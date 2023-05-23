import { useState, useEffect } from "react";



export default function inputMail(props) {

    const[addMail, setAddMail] = useState('');

    const addaddMailInStoreMail = () => {

    }

    return(
        <Box >
            <Input
          variant="filled"
          placeholder="Destination"
          onChangeText={(value) => setAddMail(value)}
          value={addMail}
        />  
            <Button
            size="sm"
            variant="subtle"
            onPress={() => {
              addMailInStore();
            }}
          >
            Sélectionner
          </Button>
        </Box>
    )


}
