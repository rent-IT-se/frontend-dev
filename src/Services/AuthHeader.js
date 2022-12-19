export default function AuthHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.access) {
      console.log(user.access)
      return { Authorization: 'Bearer ' + user.access };
    } else {
      return {};
    }
}