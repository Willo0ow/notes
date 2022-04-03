import Link from "next/link";

// get all users and pass to props in template
export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return {
        props: {
            users: data,
        }
    }
}

const Notes = ({ users }) => {
    return (
        <div>
            <h1>Notes</h1>
            {
                users.map((user) => (
                    <div>
                        <div key={user.id}>{user.name}</div>
                        <Link href={`/notes/read/${user.id}`}>
                            <a>{user.id}</a>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
}

export default Notes;