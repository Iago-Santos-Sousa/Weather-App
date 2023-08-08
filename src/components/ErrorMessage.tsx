const ErroMessage = () => {
  return (
    <div className="error-message border-t-2 border-solid border-[#fff] mt-5 pt-4 text-center">
      <p className="text-justify">
        Não foi possível encontrar o clima de uma cidade com este nome.
      </p>
    </div>
  );
};

export default ErroMessage;
