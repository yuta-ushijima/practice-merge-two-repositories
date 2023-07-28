# saml20_sso_with_azure_ad_sample

This is sample repo for tutorial of below:

[Integrating with Azure AD SAML 2.0 SSO using Devise Token Auth and Ember Simple Auth (Part 2)](https://medium.com/@pavloosadchyi/integrating-with-azure-ad-saml-2-0-sso-using-devise-token-auth-and-ember-simple-auth-part-2-fa3507d82b33)

## Rails about

````ruby
Rails version             5.2.3
Ruby version              2.6.3-p62 (x86_64-darwin19)
RubyGems version          3.0.3
Rack version              2.0.7
Middleware                Rack::Cors, Rack::Sendfile, ActionDispatch::Static, ActionDispatch::Executor, ActiveSupport::Cache::Strategy::LocalCache::Middleware, Rack::Runtime, ActionDispatch::RequestId, ActionDispatch::RemoteIp, Rails::Rack::Logger, ActionDispatch::ShowExceptions, ActionDispatch::DebugExceptions, ActionDispatch::Reloader, ActionDispatch::Callbacks, ActiveRecord::Migration::CheckPending, Rack::Head, Rack::ConditionalGet, Rack::ETag, Warden::Manager, ActionDispatch::Cookies, ActionDispatch::Session::CookieStore, ActionDispatch::Flash, OmniAuth::Builder
Application root          /Users/yuta_ushijima/workspace/d-lighted/saml20_sso_with_azure_ad_sample
Environment               development
Database adapter          mysql2
Database schema version   20191031024720

# ember-saml20-sso-with-azure-ad-sample

This is sample repo for tutorial of below:

[Integrating with Azure AD SAML 2.0 SSO using Devise Token Auth and Ember Simple Auth (Part 3)](https://medium.com/@pavloosadchyi/integrating-with-azure-ad-saml-2-0-sso-using-devise-token-auth-and-ember-simple-auth-part-3-330016641791)

## ember version
```ember
ember-cli: 3.13.1
node: 9.3.0
os: darwin x64
````

## Prepare app

```bash
$ cd saml20_sso_with_azure_ad_sample
$ bundle install --path vendor/bundle
$ bundle exec rails db:create
$ bundle exec rails db:migrate
```

## Wake up rails server

```bash
$ SSL=true bundle exec rails s
$ cd ember_saml20_sso_with_azure_ad_sample
$ npm install
```

## Wake up ember server

```bash
$ ember server
```
