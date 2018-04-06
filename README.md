# API Simulator

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

API Server to simulate broken routes as status codes. Awesome for Frontend Developement

Try it out at: api-sim.now.sh

Currently takes in Query Params

| Query  | Definition                       |
| ------ | -------------------------------- |
| status | The status code to use to return |

For example:

Error 404: https://api-sim.now.sh?status=404

## API Calls

**Base URI**: [api-sim.now.sh](api-sim.now.sh)

<details>
<summary>GET /?status={statusCode}</summary>

```
{
  status: statusCode
}
```

</details>

<details>
<summary>POST /?status={statusCode}</summary>

## POST body (application/json)

```
{
  // whatever you want
}
```

```
{
  status: statusCode
  ...your response
}
```

</details>

# LICENSE

This is licensed under `MIT`

<img width="80%" src="https://i.imgur.com/siLz1Yr.png" alt="powered by monPlan" />
