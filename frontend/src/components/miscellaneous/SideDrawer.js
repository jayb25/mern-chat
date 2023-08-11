import { Box, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, MenuDivider, Text, Input, Toast } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem, Tooltip, useToast } from "@chakra-ui/react";
import { BellIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/button';
import { Avatar } from '@chakra-ui/avatar';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { ChatState } from "../../context/ChatProvider";
import ProfileModal from "./ProfileModal";
import { useDisclosure } from "@chakra-ui/hooks";


function SideDrawer() {
  const [search, setSearch] = useState("");
  const [searchResult, SetSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();

  const { user } = ChatState();
  const history = useHistory();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    history.push("/");
  };

    const toast = useToast();

    const handleSearch = () => {
    if (!search) {
      toast({
        title: "Please enter something in search",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
      return;
    }
  };

 

  return <>
    <Box
      d="flex"
      justifyContent="space-between"
      alignItems="center"
      bg="Pink"
      w="100%"
      p="5px  10px 5px 10px"
    >
      <Tooltip label="Search Users to Chat" hasArrow placement="bottom-end">
        <Button variant="ghost" onClick={onOpen}>
          <i class="fas fa-search"></i>
          <Text d={{ base: "none", md: "flex" }} px="4">
            Search User
          </Text>
        </Button>
      </Tooltip>

      <Text fontSize="2x1" fontFamily="Work Sans">
        MERN Chat
      </Text>
      <div>
        <Menu>
          <MenuButton p={1}>
            <BellIcon fontSize="2x1" m={1} />
          </MenuButton>
          {/* <MenuList></MenuList> */}
        </Menu>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            <Avatar size="sm" cursor="pointer" name={user.name} src={user.pic} />
          </MenuButton>
          <MenuList>
            <ProfileModal user={user}>
              <MenuItem>My Profile</MenuItem>
            </ProfileModal>
            <MenuDivider />
            <MenuItem onClick={logoutHandler}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </Box>

    <Drawer placement="left" onClose={onClose} onOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px"></DrawerHeader>
        <DrawerBody>
        <Box d="flex" pb={2}>
          <Input
          placeholder="Search by name or email"
          mr={2}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          />
          {/* <Button onClick={handleSearch}>Go</Button> */}
        </Box>
      </DrawerBody>
       
      </DrawerContent>
      
      
    </Drawer>

  </>
};

export default SideDrawer;
