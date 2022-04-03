// pass to next info how many static paths need to be created for our data
export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    const paths = data.map(user => {
        return { params: { id: user.id.toString() } }
    })
    return {
        paths,
        fallback: false,
    }
}
// get user data based on in in route params
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    return {
        props: { user: data }
    }
};

const Note = ({user}) => {
    return (
        <div>{user.name}</div>
    );
}

export default Note;