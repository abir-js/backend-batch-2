### Title : Advanced Queries in MongoDB

### ✅ `$exists` Operator Example

**Use case**: Find products that have a `rating` field (some documents might be missing this field).

```js
db.products.find({
  rating: { $exists: true },
});
```

👉 This query returns all products **where `rating` field exists**.

If you want to find documents **where `rating` is missing**, use:

```js
db.products.find({
  rating: { $exists: false },
});
```

---

### ✅ `$type` Operator Example

**Use case**: Check the type of a field. For example, return all products where `price` is a number.

```js
db.products.find({
  price: { $type: "double" },
});
```
| Type Alias | Number | Description         |
| ---------- | ------ | ------------------- |
| `"double"` | 1      | 64-bit binary float |
| `"string"` | 2      | UTF-8 string        |
| `"object"` | 3      | Embedded document   |
| `"array"`  | 4      | Array               |
| `"bool"`   | 8      | Boolean             |
| `"date"`   | 9      | UTC datetime        |
| `"null"`   | 10     | Null value          |
| `"int"`    | 16     | 32-bit integer      |


🧠 Why use this? Because sometimes, some documents may accidentally store values as **strings instead of numbers**.

> You can also use aliases like `"string"`, `"bool"`, `"array"`, `"object"`, `"date"`, etc.

---

### ✅ `$expr` Operator Example

**Use case**: Use expressions for advanced comparisons. For example, return products where `price > rating * 5`.

```js
db.products.find({
  $expr: {
    $gt: ["$price", { $multiply: ["$rating", 5] }],
  },
});
```

🔍 This will return products where **price is greater than 5 times the rating**.

Another `$expr` example: find products where `height` is **greater than width**:

```js
db.products.find({
  $expr: {
    $gt: ["$height", "$width"],
  },
});
```

---

### Bonus: Combine Them

You can even combine operators:

**Example**: Find products that:

- Have a `rating` field
- The type of `rating` is a number
- And `price > 5 * rating`

```js
db.products.find({
  rating: { $exists: true, $type: "int" },
  $expr: {
    $gt: ["$price", { $multiply: ["$rating", 5] }],
  },
});
```

---