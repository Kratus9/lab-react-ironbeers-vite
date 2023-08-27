import { Box, Button, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

function AddBeerPage() {
  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCreateBeer = async (event) => {
    event.preventDefault();
    try {
      await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {
        name: formData.name,
        tagline: formData.tagline,
        description: formData.description,
        first_brewed: formData.first_brewed,
        brewers_tips: formData.brewers_tips,
        attenuation_level: formData.attenuation_level,
        contributed_by: formData.contributed_by,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box p="20px">
      <Box
        as="h1"
        textAlign="center"
        fontSize="2xl"
        fontWeight="bold"
        mb="20px"
        className="title"
      >
        Add a new beer
      </Box>
      <form onSubmit={handleCreateBeer}>
        <FormControl>
          <FormLabel>Name:</FormLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            bg="gray.150"
          />
        </FormControl>
        <FormControl mt="10px">
          <FormLabel>Tagline:</FormLabel>
          <Input
            type="text"
            name="tagline"
            value={formData.tagline}
            onChange={handleChange}
            bg="gray.150"
          />
        </FormControl>
        <FormControl mt="10px">
          <FormLabel>Description:</FormLabel>
          <Textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            bg="gray.150"
          />
        </FormControl>
        <FormControl mt="10px">
          <FormLabel>First Brewed:</FormLabel>
          <Input
            type="text"
            name="first_brewed"
            value={formData.first_brewed}
            onChange={handleChange}
            bg="gray.150"
          />
        </FormControl>
        <FormControl mt="10px">
          <FormLabel>Brewer's Tips:</FormLabel>
          <Input
            type="text"
            name="brewers_tips"
            value={formData.brewers_tips}
            onChange={handleChange}
            bg="gray.150"
            width="400px"
          />
        </FormControl>
        <FormControl mt="10px">
          <FormLabel>Attenuation Level:</FormLabel>
          <Input
            type="number"
            name="attenuation_level"
            value={formData.attenuation_level}
            onChange={handleChange}
            bg="gray.150"
            width="400px"
          />
        </FormControl>
        <FormControl mt="10px">
          <FormLabel>Created By:</FormLabel>
          <Input
            type="text"
            name="contributed_by"
            value={formData.contributed_by}
            onChange={handleChange}
            bg="gray.150"
            width="400px"
          />
        </FormControl>
        <Button
          mt="20px"
          colorScheme="blue"
          type="submit"
          >
          Add Beer
        </Button>
      </form>
    </Box>
  );
}

export default AddBeerPage;
