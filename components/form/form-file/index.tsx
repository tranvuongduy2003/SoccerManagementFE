import {
  Box,
  FormLabel,
  CircularProgress,
  CircularProgressLabel,
  Icon,
  Text,
  FormControl,
  FormErrorMessage,
  Flex,
  useToast,
  Tooltip
} from '@chakra-ui/react';
import Image from 'next/image';
import { CancelTokenSource } from 'axios';
import {
  useState,
  SetStateAction,
  Dispatch,
  ForwardRefRenderFunction,
  forwardRef
} from 'react';
import { FieldError } from 'react-hook-form';
import { FiAlertCircle, FiPlus } from 'react-icons/fi';

interface FileInputProps {
  label: string;
  color: string;
  width: number;
  round: string;
  name: string;
  error?: FieldError;
  setImageUrl: Dispatch<SetStateAction<string>>;
  localImageUrl: any;
  setLocalImageUrl: Dispatch<SetStateAction<string>>;
  setError: any;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileInput = (props: FileInputProps) => {
  const {
    round,
    label,
    width,
    color,
    name,
    error = null,
    setImageUrl,
    localImageUrl,
    setLocalImageUrl,
    setError,
    onChange
  } = props;

  const toast = useToast();
  const [progress, setProgress] = useState(0);
  const [isSending, setIsSending] = useState(false);
  const [cancelToken, setCancelToken] = useState<CancelTokenSource>(
    {} as CancelTokenSource
  );

  return (
    <FormControl isInvalid={!!error}>
      <Text mx="auto" color={color}>
        {label}
      </Text>
      <FormLabel
        color={color}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        border={`${round} #E5E1DA solid`}
        rounded={4}
        htmlFor={name}
        cursor={isSending ? 'progress' : 'pointer'}
        opacity={isSending ? 0.5 : 1}
      >
        <Image
          width={width}
          src={localImageUrl}
          alt="Uploaded photo"
          objectFit="cover"
        />
        <input
          data-testid={name}
          disabled={isSending}
          id={name}
          name={name}
          // onChange={handleImageUpload}
          // ref={ref}
          type="file"
          style={{
            display: 'none'
          }}
          // {...rest}
        />
      </FormLabel>
    </FormControl>
  );
};

export default FileInput;
