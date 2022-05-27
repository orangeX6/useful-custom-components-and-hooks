import useScript from './useScript';

const ScriptComponent = () => {
  const { loading, error } = useScript(
    `https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js`
  );

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;
  return <div>{window.$(window).width()}</div>;
};

export default ScriptComponent;
