type Engineer = {
  name: string;
  role: string;
}
type Blogger = {
  name: string;
  follower: number;
}

type EngineerBlogger = Engineer & Blogger;

const mike: EngineerBlogger = {
  name: 'Mike',
  role: 'Software Engineer',
  follower: 2000
}
