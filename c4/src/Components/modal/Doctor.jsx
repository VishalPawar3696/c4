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
const Doctor = () => {
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
      <Button onClick={onOpen}>Doctor</Button>
      {/* <Text textStyle="subtitle1">{isOpen ? "TRUE" : "FALSE"}</Text> */}
      {/* <Text textStyle="subtitle2">{isOpen ? "TRUE" : "FALSE"}</Text> */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Doctor Name</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl oonSubmit={handleSubmit}>
              <FormLabel>Doctor name</FormLabel>
              <Input
                type="name"
                placeholder="Doctor name"
                onChange={(e) => setName(e.target.value)}
              ></Input>
              <FormLabel placeholder="Adress">Doctor address</FormLabel>
              <Input
                placeholder="address"
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

export default Doctor;
