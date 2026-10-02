function ErrorMessage({ errorMessage }) {
  if (!errorMessage) return null;
  
  return (
    <p className="mt-1 text-xs text-red-500">
      {errorMessage}
    </p>
  );
}

export default ErrorMessage;
