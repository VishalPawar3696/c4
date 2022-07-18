import { Box } from "@chakra-ui/react";
import Doctor from "../Components/modal/Doctor";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from "@chakra-ui/react";
import Hospital from "../Components/modal/Hospital";

function HomePage() {
  return (
    <Box>
      <h1>Home</h1>
      <Doctor />
      <Hospital />
    </Box>
  );
}
export default HomePage;
