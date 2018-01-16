interface Router {
    path: string;
    text: string;
    module?: string;
    subs?: Router[]
}
export default Router;