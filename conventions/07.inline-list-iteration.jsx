/**
 * In-line list iteration
 *
 * Where possible, iterate over lists of data in-line in the returned JSX unless
 * its internal logic is sufficiently complex enough to warrant moving outside of
 * the return statement and populating an array for rendering.
 */

return (
  <div>
    {this.props.list.map(function (data) {
      return (<Component data={data} key={data.id}/>)
    })}
  </div>
);
