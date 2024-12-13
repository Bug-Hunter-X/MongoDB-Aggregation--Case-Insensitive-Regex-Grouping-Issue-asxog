```javascript
const pipeline = [
  {
    $match: {
      field: { $regex: /pattern/i }
    }
  },
  {
    $group: {
      _id: "$field",
      count: { $sum: 1 }
    }
  }
];

db.collection.aggregate(pipeline);
```
This code snippet demonstrates a common issue with MongoDB aggregation framework where the regex is case-insensitive and groups the results incorrectly.