<!-- PR_TEST_BOT_COMMENT -->
## 📸 スナップショット差分検出

CDKスナップショットテストで差分が検出されました。

### 対処方法
コメントで `update snapshot` と入力すると、自動的にスナップショットが更新されます。

### 差分の原因
以下の可能性があります：
- CDKスタック定義の変更（リソース設定、タグ等）
- 新しいAWSリソースの追加・削除
- CloudFormationテンプレートの構造変更

### 注意事項
スナップショット更新前に、[ワークフロー実行ログ](https://github.com/SumiyaE/cdk_ecs_template/actions/workflows/pr-test.yml)で差分内容を確認し、意図した変更であることを確認してください。