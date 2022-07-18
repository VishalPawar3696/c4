import { React, useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Button,
  Lorem,
  Text,
  useDisclosure,
  FormControl,
  FormLabel
} from "@chakra-ui/react";
const Hospital = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [name, setName] = useState("");
  const [add, setAdd] = useState("");

  const handleSubmit = (e) => {
    e.prevetDefault();
  };
  return (
    <>
      {/* <Modal isOpen={isOpen}>
      <ModalOverlay />
    </Modal> */}
      <Button onClick={onOpen}>Hospital</Button>
      {/* <Text textStyle="subtitle1">{isOpen ? "TRUE" : "FALSE"}</Text> */}
      {/* <Text textStyle="subtitle2">{isOpen ? "TRUE" : "FALSE"}</Text> */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Hospital Name</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl oonSubmit={handleSubmit}>
              <FormLabel>Hospital name</FormLabel>
              <Input
                placeholder="hospital name"
                type="name"
                onChange={(e) => setName(e.target.value)}
              ></Input>
              <FormLabel>Hospital address</FormLabel>
              <Input
                placeholder="hospital adress"
                type="name"
                onChange={(e) => setAdd(e.target.value)}
              ></Input>
              <Input type="Submit"></Input>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Hospital;
