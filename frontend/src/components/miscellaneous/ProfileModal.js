import { IconButton } from '@chakra-ui/button';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from '@chakra-ui/react';
import { useDisclosure } from "@chakra-ui/hooks";
import { ViewIcon } from "@chakra-ui/icons";
import { Image, Text } from "@chakra-ui/react";
import React from 'react';

const ProfileModal = ({ user, children }) => {

    const { isOPen, onOpen, onClose } = useDisclosure();

  return (
     <>
     {children ? (
        <span onClick={onOpen}>{children}</span> 
       ) : (
        <IconButton
        display={{ base: "flex" }}
        icon={<ViewIcon />}
        onClick={onOpen}/>
     )}
     <Modal sixe="lg" isOpen={isOPen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent h="410px">
          <ModalHeader 
          fontSize={"40px"}
          fontFamily={"Work Sans"}
          display={"flex"}
          justifyContent={"center"}                      
          >
            {user.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="space-between"
          >
           <Image
           borderradius="full"
           boxSize="150px"
           src={user.pic}
           alt={user.name}
           />
           <Text></Text>              
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>           
          </ModalFooter>
        </ModalContent>
      </Modal>
  </>
  );
};

export default ProfileModal;
