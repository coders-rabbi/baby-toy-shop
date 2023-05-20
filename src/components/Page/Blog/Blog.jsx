import React from 'react';
import { useHeader } from '../../../../useTitle';

const Blog = () => {
    useHeader("Blog - Baby Toy Shop")
    return (
        <div>
            <div className='container mx-auto grid md:grid-cols-2 gap-6 mt-6 mb-10'>
                <div className='p-8 bg-header-bg shadow-lg rounded-lg'>
                    <h1 className='text-2xl font-semibold'><span className='font-bold'>Question:</span> Compare SQL and NoSQL databases?</h1>
                    <p><span className='font-bold'>Answer: <br /> </span><small>SQL and NoSQL are two different types of database management systems (DBMS). SQL databases are relational databases, while NoSQL databases are non-relational databases. <br />
                        <span className='font-bold'>SQL databases</span> <br />
                        SQL databases are the most common type of database. They use a structured query language (SQL) to store and retrieve data. SQL databases are typically used for applications that require complex queries and transaction management. <br />
                        <span className='font-bold'>NoSQL databases</span> <br />
                        NoSQL databases are a newer type of database that are designed to store and retrieve large amounts of unstructured data. NoSQL databases do not use SQL, and they offer a variety of data models, including document, key-value, graph, and wide-column stores.
                    </small></p>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Fature</th>
                                    <th>SQL</th>
                                    <th>NoSQL</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <td>Data Model</td>
                                    <td>Relational</td>
                                    <td>Non-Relational</td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <td>Query language</td>
                                    <td>SQL</td>
                                    <td>No SQL</td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <td>Scalability</td>
                                    <td>Vertical</td>
                                    <td>Horizontal</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='border p-8 bg-header-bg shadow-lg rounded-lg'>
                    <h1 className='text-2xl font-semibold'><span className='font-bold'>Question:</span> What is Express JS? What is Next JS?</h1>
                    <p><span className='font-bold'>Answer: <br /> </span><small>Write Down the difference between Express js and Next js. <br />
                        <span className='font-bold'>Express Js:</span> <br />
                        Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. Express is a popular choice for building web applications because it is easy to learn and use, and it provides a wide range of features that can be used to build complex applications. <br />
                        <span className='font-semibold'>Some of the features of Express.js include:</span> <br />

                        Routing: Express provides a powerful routing system that allows you to define routes for your application.
                        Middleware: Express middleware is a powerful way to add functionality to your application. Middleware can be used to handle requests, responses, and errors.
                        Templates: Express provides a template engine that can be used to render HTML templates.
                        Session management: Express provides a session management system that can be used to track user sessions.
                        <br />
                        <span className='font-bold'>Next Js:</span> <br />
                        NestJS is a progressive Node.js framework that combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming). It is built with and fully supports TypeScript (yet still enables developers to code in pure JavaScript) and provides a robust set of features for building efficient, scalable, and enterprise-grade server-side applications. <br />
                        <span className='font-semibold'>Some of the features of NestJS include:</span>
                        Modular architecture: NestJS enables developers to organize their code into modular blocks, making it easier to maintain and reuse code.
                        Dependency injection: NestJS uses dependency injection to make it easy to inject dependencies into classes, making code more testable and reusable.
                        Routing: NestJS provides a powerful routing system that allows you to define routes for your application.
                        Middleware: NestJS middleware is a powerful way to add functionality to your application. Middleware can be used to handle requests, responses, and errors.
                    </small></p>
                </div>
                <div className='border p-8 bg-header-bg shadow-lg rounded-lg'>
                    <h1 className='text-2xl font-semibold'><span className='font-bold'>Question:</span> What is MongoDB aggregate and how does it work? </h1>
                    <p><span className='font-bold'>Answer: <br /> </span><small>
                        MongoDB aggregate is a feature that allows you to perform complex operations on data in a MongoDB collection. Aggregate operations are performed using an aggregation pipeline, which is a sequence of stages that process documents. Each stage performs an operation on the input documents, and the documents that are output from a stage are passed to the next stage.

                        The aggregation pipeline can be used to perform a variety of operations, including: <br />

                        <span className='font-semibold'>Filtering:</span> You can use the aggregation pipeline to filter documents that match certain criteria. For example, you could use the $match stage to filter documents that have a certain value in a certain field.
                        <br />

                        <span className='font-semibold'>Grouping:</span> You can use the aggregation pipeline to group documents together based on common values. For example, you could use the $group stage to group documents together by the value of a certain field.
                        <br />

                        <span className='font-semibold'>Calculating:</span> You can use the aggregation pipeline to calculate values based on groups of documents. For example, you could use the $sum stage to calculate the total value of a certain field for all documents in a group.
                        <span className='font-semibold'>Reshaping:</span>  You can use the aggregation pipeline to reshape documents. For example, you could use the $project stage to add new fields to documents or to remove existing fields.
                        The aggregation pipeline is a powerful tool that can be used to perform complex operations on data in a MongoDB collection. If you need to perform complex operations on your data, then the aggregation pipeline is a good option.

                        Here are some examples of how the aggregation pipeline can be used:

                        To find all documents in a collection that have a certain value in a certain field, you could use the following aggregation pipeline:
                    </small></p>
                </div>
                <div className='p-8 bg-header-bg shadow-lg rounded-lg'>
                    <h1 className='text-2xl font-semibold'><span className='font-bold'>Question:</span> What is a custom hook, and why will you create a custom hook?</h1>
                    <p><span className='font-bold'>Answer: <br /> </span><small>
                        <span className='font-semibold'>Access token: </span> <br />
                        <span>
                            An access token is a string of characters that is used to access a protected resource. It is typically generated by an authorization server and is used by a client to access a resource that is protected by the authorization server. Access tokens are typically short-lived and expire after a certain period of time.</span> <br />
                        <span className='font-semibold'>Here are some of the benefits of using access tokens: </span> <br />
                        <span>
                            Improved security: Access tokens help to improve security by limiting the amount of time that a user's credentials are exposed.
                            Increased usability: Access tokens can help to increase usability by allowing users to access resources without having to re-authenticate frequently.
                            Reduced complexity: Access tokens can help to reduce complexity by providing a standardized way to authenticate users and access resources.
                        </span> <br />
                        <span className='font-semibold'>Refresh token: </span> <br />
                        <span>

                            A refresh token is a long-lived, encrypted string that is used to obtain new access tokens. It is typically generated by an authorization server and is used by a client to obtain a new access token when the old access token expires.

                            Refresh tokens are typically valid for a longer period of time than access tokens, such as 30 days or 90 days. Refresh tokens are typically stored in the user's account on the authorization server.
                        </span> <br />
                        <span className='font-semibold'>Here are some of the benefits of using access tokens: </span> <br />
                        <span>
                            Improved security: Access tokens help to improve security by limiting the amount of time that a user's credentials are exposed.
                            Increased usability: Access tokens can help to increase usability by allowing users to access resources without having to re-authenticate frequently.
                            Reduced complexity: Access tokens can help to reduce complexity by providing a standardized way to authenticate users and access resources.
                        </span> <br />
                    </small></p>
                </div>
            </div>
        </div>
    );
};

export default Blog;