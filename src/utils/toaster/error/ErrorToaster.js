

const ErrorToaster = (toast, error) => {
    toast({
        title: 'Error',
        description: error || 'an error occured',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
    })
}

export default ErrorToaster
