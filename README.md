# MongoDB Aggregation: Case-Insensitive Regex Grouping Issue
This repository demonstrates a common issue encountered while using case-insensitive regular expressions within the MongoDB aggregation framework. The problem arises when the `$regex` operator with the `i` flag (for case-insensitivity) is used in conjunction with the `$group` operator.  Incorrect grouping might occur due to the case-insensitive nature of the match.

The `bug.js` file shows the erroneous code, while `bugSolution.js` presents the corrected version.  The solution addresses the grouping issue ensuring accurate results.