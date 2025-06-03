function Main(props) {
 
  return (
    <main>
        <form className="filters">
            <label htmlFor="filterName">Filtrar por nombre:</label>
            <input onInput={props.handleInputFilter} type="text" name="filterName" id="filterName" />
        </form>
    </main>
  );
}

export default Main;