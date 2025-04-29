import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as CdkVitestTemplate from '../lib/cdk-vitest-template-stack';
import { test, expect } from 'vitest';
import customSerializer from './plugin/custom-serializer';

test('cdk stack test', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new CdkVitestTemplate.CdkVitestTemplateStack(app, 'TestStack');
  // THEN
  const template = Template.fromStack(stack);

  // lambdaのソースコードが変わるたび、コードを保存するS3のHash値も変わるため、Hash値を固定文字列に置き換える
  expect.addSnapshotSerializer(customSerializer);

  // 生成したテンプレートとスナップショットが同じであることを確認
  expect(template).toMatchSnapshot();
});
