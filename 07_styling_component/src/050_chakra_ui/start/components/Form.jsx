import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import { useState } from "react";
const Form = ({ createTodo }) => {
  const [enteredTodo, setEnteredTodo] = useState("");

  const toast = useToast();

  const addTodo = (e) => {
    e.preventDefault();

    if (!enteredTodo) {
      toast({
        title: "新しいタスクを入力してください。",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return
    }

    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo,
    };

    createTodo(newTodo);

    setEnteredTodo("");

    toast({
      title: "Todoタスクの設定を行いました。",
      description: enteredTodo,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };
  return (
    <div>
      <form onSubmit={addTodo}>
        <HStack>
          <Input
            placeholder="新しいタスクを入力"
            _placeholder={{ opacity: "0.3", color: "gray.500" }}
            size="lg"
            p="3"
            bgColor="white"
            type="text"
            value={enteredTodo}
            onChange={(e) => setEnteredTodo(e.target.value)}
          />
          <Button
            type="submit"
            colorScheme="blue"
            size="md"
            bgColor="white"
            variant="outline"
            px={7}
            >
            追加
          </Button>
        </HStack>
      </form>
    </div>
  );
};

export default Form;
