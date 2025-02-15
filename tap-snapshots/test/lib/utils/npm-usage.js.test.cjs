/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/lib/utils/npm-usage.js TAP usage basic usage > must match snapshot 1`] = `
npm <command>

Usage:

npm install        install all the dependencies in your project
npm install <foo>  add the <foo> dependency to your project
npm test           run this project's tests
npm run <foo>      run the script named <foo>
npm <command> -h   quick help on <command>
npm -l             display usage info for all commands
npm help <term>    search for help on <term>
npm help npm       more involved overview

All commands:

    access, adduser, audit, bin, bugs, cache, ci, completion,
    config, dedupe, deprecate, diff, dist-tag, docs, doctor,
    edit, exec, explain, explore, find-dupes, fund, get, help,
    hook, init, install, install-ci-test, install-test, link,
    ll, login, logout, ls, org, outdated, owner, pack, ping,
    prefix, profile, prune, publish, rebuild, repo, restart,
    root, run-script, search, set, set-script, shrinkwrap, star,
    stars, start, stop, team, test, token, uninstall, unpublish,
    unstar, update, version, view, whoami

Specify configs in the ini-formatted file:
    /some/config/file/.npmrc
or on the command line via: npm <command> --key=value

More configuration info: npm help config
Configuration fields: npm help 7 config

npm@{VERSION} {BASEDIR}
`

exports[`test/lib/utils/npm-usage.js TAP usage set process.stdout.columns columns=0 > must match snapshot 1`] = `
npm <command>

Usage:

npm install        install all the dependencies in your project
npm install <foo>  add the <foo> dependency to your project
npm test           run this project's tests
npm run <foo>      run the script named <foo>
npm <command> -h   quick help on <command>
npm -l             display usage info for all commands
npm help <term>    search for help on <term>
npm help npm       more involved overview

All commands:

    access, adduser, audit, bin, bugs, cache, ci, completion,
    config, dedupe, deprecate, diff, dist-tag, docs, doctor,
    edit, exec, explain, explore, find-dupes, fund, get, help,
    hook, init, install, install-ci-test, install-test, link,
    ll, login, logout, ls, org, outdated, owner, pack, ping,
    prefix, profile, prune, publish, rebuild, repo, restart,
    root, run-script, search, set, set-script, shrinkwrap, star,
    stars, start, stop, team, test, token, uninstall, unpublish,
    unstar, update, version, view, whoami

Specify configs in the ini-formatted file:
    /some/config/file/.npmrc
or on the command line via: npm <command> --key=value

More configuration info: npm help config
Configuration fields: npm help 7 config

npm@{VERSION} {BASEDIR}
`

exports[`test/lib/utils/npm-usage.js TAP usage set process.stdout.columns columns=90 > must match snapshot 1`] = `
npm <command>

Usage:

npm install        install all the dependencies in your project
npm install <foo>  add the <foo> dependency to your project
npm test           run this project's tests
npm run <foo>      run the script named <foo>
npm <command> -h   quick help on <command>
npm -l             display usage info for all commands
npm help <term>    search for help on <term>
npm help npm       more involved overview

All commands:

    access, adduser, audit, bin, bugs, cache, ci, completion,
    config, dedupe, deprecate, diff, dist-tag, docs, doctor,
    edit, exec, explain, explore, find-dupes, fund, get, help,
    hook, init, install, install-ci-test, install-test, link,
    ll, login, logout, ls, org, outdated, owner, pack, ping,
    prefix, profile, prune, publish, rebuild, repo, restart,
    root, run-script, search, set, set-script, shrinkwrap, star,
    stars, start, stop, team, test, token, uninstall, unpublish,
    unstar, update, version, view, whoami

Specify configs in the ini-formatted file:
    /some/config/file/.npmrc
or on the command line via: npm <command> --key=value

More configuration info: npm help config
Configuration fields: npm help 7 config

npm@{VERSION} {BASEDIR}
`

exports[`test/lib/utils/npm-usage.js TAP usage with browser > must match snapshot 1`] = `
npm <command>

Usage:

npm install        install all the dependencies in your project
npm install <foo>  add the <foo> dependency to your project
npm test           run this project's tests
npm run <foo>      run the script named <foo>
npm <command> -h   quick help on <command>
npm -l             display usage info for all commands
npm help <term>    search for help on <term> (in a browser)
npm help npm       more involved overview (in a browser)

All commands:

    access, adduser, audit, bin, bugs, cache, ci, completion,
    config, dedupe, deprecate, diff, dist-tag, docs, doctor,
    edit, exec, explain, explore, find-dupes, fund, get, help,
    hook, init, install, install-ci-test, install-test, link,
    ll, login, logout, ls, org, outdated, owner, pack, ping,
    prefix, profile, prune, publish, rebuild, repo, restart,
    root, run-script, search, set, set-script, shrinkwrap, star,
    stars, start, stop, team, test, token, uninstall, unpublish,
    unstar, update, version, view, whoami

Specify configs in the ini-formatted file:
    /some/config/file/.npmrc
or on the command line via: npm <command> --key=value

More configuration info: npm help config
Configuration fields: npm help 7 config

npm@{VERSION} {BASEDIR}
`

exports[`test/lib/utils/npm-usage.js TAP usage with long > must match snapshot 1`] = `
npm <command>

Usage:

npm install        install all the dependencies in your project
npm install <foo>  add the <foo> dependency to your project
npm test           run this project's tests
npm run <foo>      run the script named <foo>
npm <command> -h   quick help on <command>
npm -l             display usage info for all commands
npm help <term>    search for help on <term>
npm help npm       more involved overview

All commands:

    access          npm access
                    
                    Set access level on published packages
                    
                    Usage:
                    npm access public [<package>]
                    npm access restricted [<package>]
                    npm access grant <read-only|read-write> <scope:team> [<package>]
                    npm access revoke <scope:team> [<package>]
                    npm access 2fa-required [<package>]
                    npm access 2fa-not-required [<package>]
                    npm access ls-packages [<user>|<scope>|<scope:team>]
                    npm access ls-collaborators [<package> [<user>]]
                    npm access edit [<package>]
                    
                    Run "npm help access" for more info

    adduser         npm adduser
                    
                    Add a registry user account
                    
                    Usage:
                    npm adduser
                    
                    Options:
                    [--registry <registry>] [--scope <@scope>] [--always-auth]
                    
                    aliases: login, add-user
                    
                    Run "npm help adduser" for more info

    audit           npm audit
                    
                    Run a security audit
                    
                    Usage:
                    npm audit [fix]
                    
                    Options:
                    [--audit-level <info|low|moderate|high|critical|none>] [--dry-run] [-f|--force]
                    [--json] [--package-lock-only] [--production]
                    
                    Run "npm help audit" for more info

    bin             npm bin
                    
                    Display npm bin folder
                    
                    Usage:
                    npm bin
                    
                    Options:
                    [-g|--global]
                    
                    Run "npm help bin" for more info

    bugs            npm bugs
                    
                    Report bugs for a package in a web browser
                    
                    Usage:
                    npm bugs [<pkgname>]
                    
                    alias: issues
                    
                    Run "npm help bugs" for more info

    cache           npm cache
                    
                    Manipulates packages cache
                    
                    Usage:
                    npm cache add <tarball file>
                    npm cache add <folder>
                    npm cache add <tarball url>
                    npm cache add <git url>
                    npm cache add <name>@<version>
                    npm cache clean
                    npm cache verify
                    
                    Run "npm help cache" for more info

    ci              npm ci
                    
                    Install a project with a clean slate
                    
                    Usage:
                    npm ci
                    
                    aliases: clean-install, ic, install-clean, isntall-clean
                    
                    Run "npm help ci" for more info

    completion      npm completion
                    
                    Tab Completion for npm
                    
                    Usage:
                    npm completion
                    
                    Run "npm help completion" for more info

    config          npm config
                    
                    Manage the npm configuration files
                    
                    Usage:
                    npm config set <key>=<value> [<key>=<value> ...]
                    npm config get [<key> [<key> ...]]
                    npm config delete <key> [<key> ...]
                    npm config list [--json]
                    npm config edit
                    
                    alias: c
                    
                    Run "npm help config" for more info

    dedupe          npm dedupe
                    
                    Reduce duplication in the package tree
                    
                    Usage:
                    npm dedupe
                    
                    alias: ddp
                    
                    Run "npm help dedupe" for more info

    deprecate       npm deprecate
                    
                    Deprecate a version of a package
                    
                    Usage:
                    npm deprecate <pkg>[@<version>] <message>
                    
                    Run "npm help deprecate" for more info

    diff            npm diff
                    
                    The registry diff command
                    
                    Usage:
                    npm diff [...<paths>]
                    npm diff --diff=<pkg-name> [...<paths>]
                    npm diff --diff=<version-a> [--diff=<version-b>] [...<paths>]
                    npm diff --diff=<spec-a> [--diff=<spec-b>] [...<paths>]
                    npm diff [--diff-ignore-all-space] [--diff-name-only] [...<paths>] [...<paths>]
                    
                    Run "npm help diff" for more info

    dist-tag        npm dist-tag
                    
                    Modify package distribution tags
                    
                    Usage:
                    npm dist-tag add <pkg>@<version> [<tag>]
                    npm dist-tag rm <pkg> <tag>
                    npm dist-tag ls [<pkg>]
                    
                    Options:
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces]
                    
                    alias: dist-tags
                    
                    Run "npm help dist-tag" for more info

    docs            npm docs
                    
                    Open documentation for a package in a web browser
                    
                    Usage:
                    npm docs [<pkgname> [<pkgname> ...]]
                    
                    Options:
                    [--browser|--browser <browser>] [--registry <registry>]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces]
                    
                    alias: home
                    
                    Run "npm help docs" for more info

    doctor          npm doctor
                    
                    Check your npm environment
                    
                    Usage:
                    npm doctor
                    
                    Run "npm help doctor" for more info

    edit            npm edit
                    
                    Edit an installed package
                    
                    Usage:
                    npm edit <pkg>[/<subpkg>...]
                    
                    Run "npm help edit" for more info

    exec            npm exec
                    
                    Run a command from a local or remote npm package
                    
                    Usage:
                    npm exec -- <pkg>[@<version>] [args...]
                    npm exec --package=<pkg>[@<version>] -- <cmd> [args...]
                    npm exec -c '<cmd> [args...]'
                    npm exec --package=foo -c '<cmd> [args...]'
                    
                    Options:
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces]
                    
                    alias: x
                    
                    Run "npm help exec" for more info

    explain         npm explain
                    
                    Explain installed packages
                    
                    Usage:
                    npm explain <folder | specifier>
                    
                    alias: why
                    
                    Run "npm help explain" for more info

    explore         npm explore
                    
                    Browse an installed package
                    
                    Usage:
                    npm explore <pkg> [ -- <command>]
                    
                    Run "npm help explore" for more info

    find-dupes      npm find-dupes
                    
                    Find duplication in the package tree
                    
                    Usage:
                    npm find-dupes
                    
                    Run "npm help find-dupes" for more info

    fund            npm fund
                    
                    Retrieve funding information
                    
                    Usage:
                    npm fund [[<@scope>/]<pkg>]
                    
                    Options:
                    [--json] [--browser|--browser <browser>] [--unicode]
                    [--which <fundingSourceNumber>]
                    
                    Run "npm help fund" for more info

    get             npm get
                    
                    Get a value from the npm configuration
                    
                    Usage:
                    npm get [<key> ...] (See \`npm config\`)
                    
                    Run "npm help get" for more info

    help            npm help
                    
                    Get help on npm
                    
                    Usage:
                    npm help <term> [<terms..>]
                    
                    alias: hlep
                    
                    Run "npm help help" for more info

    hook            npm hook
                    
                    Manage registry hooks
                    
                    Usage:
                    npm hook add <pkg> <url> <secret> [--type=<type>]
                    npm hook ls [pkg]
                    npm hook rm <id>
                    npm hook update <id> <url> <secret>
                    
                    Run "npm help hook" for more info

    init            npm init
                    
                    Create a package.json file
                    
                    Usage:
                    npm init [--force|-f|--yes|-y|--scope]
                    npm init <@scope> (same as \`npx <@scope>/create\`)
                    npm init [<@scope>/]<name> (same as \`npx [<@scope>/]create-<name>\`)
                    
                    Options:
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces]
                    
                    aliases: create, innit
                    
                    Run "npm help init" for more info

    install         npm install
                    
                    Install a package
                    
                    Usage:
                    npm install [<@scope>/]<pkg>
                    npm install [<@scope>/]<pkg>@<tag>
                    npm install [<@scope>/]<pkg>@<version>
                    npm install [<@scope>/]<pkg>@<version range>
                    npm install <alias>@npm:<name>
                    npm install <folder>
                    npm install <tarball file>
                    npm install <tarball url>
                    npm install <git:// url>
                    npm install <github username>/<github project>
                    
                    Options:
                    [-S|--save|--no-save|--save-prod|--save-dev|--save-optional|--save-peer]
                    [-E|--save-exact]
                    
                    aliases: i, in, ins, inst, insta, instal, isnt, isnta, isntal, add
                    
                    Run "npm help install" for more info

    install-ci-test npm install-ci-test
                    
                    Install a project with a clean slate and run tests
                    
                    Usage:
                    npm install-ci-test
                    
                    alias: cit
                    
                    Run "npm help install-ci-test" for more info

    install-test    npm install-test
                    
                    Install package(s) and run tests
                    
                    Usage:
                    npm install-test [<@scope>/]<pkg>
                    npm install-test [<@scope>/]<pkg>@<tag>
                    npm install-test [<@scope>/]<pkg>@<version>
                    npm install-test [<@scope>/]<pkg>@<version range>
                    npm install-test <alias>@npm:<name>
                    npm install-test <folder>
                    npm install-test <tarball file>
                    npm install-test <tarball url>
                    npm install-test <git:// url>
                    npm install-test <github username>/<github project>
                    
                    Options:
                    [-S|--save|--no-save|--save-prod|--save-dev|--save-optional|--save-peer]
                    [-E|--save-exact]
                    
                    alias: it
                    
                    Run "npm help install-test" for more info

    link            npm link
                    
                    Symlink a package folder
                    
                    Usage:
                    npm link (in package dir)
                    npm link [<@scope>/]<pkg>[@<version>]
                    
                    alias: ln
                    
                    Run "npm help link" for more info

    ll              npm ll
                    
                    List installed packages
                    
                    Usage:
                    npm ll [[<@scope>/]<pkg> ...]
                    
                    alias: la
                    
                    Run "npm help ll" for more info

    login           npm adduser
                    
                    Add a registry user account
                    
                    Usage:
                    npm adduser
                    
                    Options:
                    [--registry <registry>] [--scope <@scope>] [--always-auth]
                    
                    aliases: login, add-user
                    
                    Run "npm help adduser" for more info

    logout          npm logout
                    
                    Log out of the registry
                    
                    Usage:
                    npm logout
                    
                    Options:
                    [--registry <registry>] [--scope <@scope>]
                    
                    Run "npm help logout" for more info

    ls              npm ls
                    
                    List installed packages
                    
                    Usage:
                    npm ls npm ls [[<@scope>/]<pkg> ...]
                    
                    alias: list
                    
                    Run "npm help ls" for more info

    org             npm org
                    
                    Manage orgs
                    
                    Usage:
                    npm org set orgname username [developer | admin | owner]
                    npm org rm orgname username
                    npm org ls orgname [<username>]
                    
                    alias: ogr
                    
                    Run "npm help org" for more info

    outdated        npm outdated
                    
                    Check for outdated packages
                    
                    Usage:
                    npm outdated [[<@scope>/]<pkg> ...]
                    
                    Run "npm help outdated" for more info

    owner           npm owner
                    
                    Manage package owners
                    
                    Usage:
                    npm owner add <user> [<@scope>/]<pkg>
                    npm owner rm <user> [<@scope>/]<pkg>
                    npm owner ls [<@scope>/]<pkg>
                    
                    alias: author
                    
                    Run "npm help owner" for more info

    pack            npm pack
                    
                    Create a tarball from a package
                    
                    Usage:
                    npm pack [[<@scope>/]<pkg>...]
                    
                    Options:
                    [--dry-run]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces]
                    
                    Run "npm help pack" for more info

    ping            npm ping
                    
                    Ping npm registry
                    
                    Usage:
                    npm ping
                    
                    Options:
                    [--registry <registry>]
                    
                    Run "npm help ping" for more info

    prefix          npm prefix
                    
                    Display prefix
                    
                    Usage:
                    npm prefix [-g]
                    
                    Run "npm help prefix" for more info

    profile         npm profile
                    
                    Change settings on your registry profile
                    
                    Usage:
                    npm profile enable-2fa [auth-only|auth-and-writes]
                    npm profile disable-2fa
                    npm profile get [<key>]
                    npm profile set <key> <value>
                    
                    Run "npm help profile" for more info

    prune           npm prune
                    
                    Remove extraneous packages
                    
                    Usage:
                    npm prune [[<@scope>/]<pkg>...]
                    
                    Options:
                    [--production]
                    
                    Run "npm help prune" for more info

    publish         npm publish
                    
                    Publish a package
                    
                    Usage:
                    npm publish [<folder>]
                    
                    Options:
                    [--tag <tag>] [--access <restricted|public>] [--dry-run]
                    
                    Run "npm help publish" for more info

    rebuild         npm rebuild
                    
                    Rebuild a package
                    
                    Usage:
                    npm rebuild [[<@scope>/]<name>[@<version>] ...]
                    
                    alias: rb
                    
                    Run "npm help rebuild" for more info

    repo            npm repo
                    
                    Open package repository page in the browser
                    
                    Usage:
                    npm repo [<pkgname> [<pkgname> ...]]
                    
                    Options:
                    [--browser|--browser <browser>]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces]
                    
                    Run "npm help repo" for more info

    restart         npm restart
                    
                    Restart a package
                    
                    Usage:
                    npm restart [-- <args>]
                    
                    Run "npm help restart" for more info

    root            npm root
                    
                    Display npm root
                    
                    Usage:
                    npm root
                    
                    Options:
                    [-g|--global]
                    
                    Run "npm help root" for more info

    run-script      npm run-script
                    
                    Run arbitrary package scripts
                    
                    Usage:
                    npm run-script <command> [-- <args>]
                    
                    Options:
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces]
                    
                    aliases: run, rum, urn
                    
                    Run "npm help run-script" for more info

    search          npm search
                    
                    Search for pacakges
                    
                    Usage:
                    npm search [search terms ...]
                    
                    Options:
                    [-l|--long] [--json] [-p|--parseable] [--no-description]
                    
                    aliases: s, se, find
                    
                    Run "npm help search" for more info

    set             npm set
                    
                    Set a value in the npm configuration
                    
                    Usage:
                    npm set <key>=<value> [<key>=<value> ...] (See \`npm config\`)
                    
                    Run "npm help set" for more info

    set-script      npm set-script
                    
                    Set tasks in the scripts section of package.json
                    
                    Usage:
                    npm set-script [<script>] [<command>]
                    
                    Options:
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces]
                    
                    Run "npm help set-script" for more info

    shrinkwrap      npm shrinkwrap
                    
                    Lock down dependency versions for publication
                    
                    Usage:
                    npm shrinkwrap
                    
                    Run "npm help shrinkwrap" for more info

    star            npm star
                    
                    Mark your favorite packages
                    
                    Usage:
                    npm star [<pkg>...]
                    
                    Run "npm help star" for more info

    stars           npm stars
                    
                    View packages marked as favorites
                    
                    Usage:
                    npm stars [<user>]
                    
                    Run "npm help stars" for more info

    start           npm start
                    
                    Start a package
                    
                    Usage:
                    npm start [-- <args>]
                    
                    Run "npm help start" for more info

    stop            npm stop
                    
                    Stop a package
                    
                    Usage:
                    npm stop [-- <args>]
                    
                    Run "npm help stop" for more info

    team            npm team
                    
                    Manage organization teams and team memberships
                    
                    Usage:
                    npm team create <scope:team> [--otp <otpcode>]
                    npm team destroy <scope:team> [--otp <otpcode>]
                    npm team add <scope:team> <user> [--otp <otpcode>]
                    npm team rm <scope:team> <user> [--otp <otpcode>]
                    npm team ls <scope>|<scope:team>
                    
                    Run "npm help team" for more info

    test            npm test
                    
                    Test a package
                    
                    Usage:
                    npm test [-- <args>]
                    
                    aliases: tst, t
                    
                    Run "npm help test" for more info

    token           npm token
                    
                    Manage your authentication tokens
                    
                    Usage:
                    npm token list
                    npm token revoke <id|token>
                    npm token create [--read-only] [--cidr=list]
                    
                    Run "npm help token" for more info

    uninstall       npm uninstall
                    
                    Remove a package
                    
                    Usage:
                    npm uninstall [<@scope>/]<pkg>...
                    
                    Options:
                    [-S|--save|--no-save|--save-prod|--save-dev|--save-optional|--save-peer]
                    
                    aliases: un, unlink, remove, rm, r
                    
                    Run "npm help uninstall" for more info

    unpublish       npm unpublish
                    
                    Remove a package from the registry
                    
                    Usage:
                    npm unpublish [<@scope>/]<pkg>[@<version>]
                    
                    Run "npm help unpublish" for more info

    unstar          npm unstar
                    
                    Remove an item from your favorite packages
                    
                    Usage:
                    npm unstar [<pkg>...]
                    
                    Run "npm help unstar" for more info

    update          npm update
                    
                    Update packages
                    
                    Usage:
                    npm update [<pkg>...]
                    
                    Options:
                    [-g|--global]
                    
                    aliases: up, upgrade, udpate
                    
                    Run "npm help update" for more info

    version         npm version
                    
                    Bump a package version
                    
                    Usage:
                    npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]
                    
                    Options:
                    [--allow-same-version] [--commit-hooks] [--git-tag-version] [--json]
                    [--preid prerelease-id] [--sign-git-tag]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces]
                    
                    alias: verison
                    
                    Run "npm help version" for more info

    view            npm view
                    
                    View registry info
                    
                    Usage:
                    npm view [<@scope>/]<pkg>[@<version>] [<field>[.subfield]...]
                    
                    Options:
                    [--json] [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces]
                    
                    aliases: v, info, show
                    
                    Run "npm help view" for more info

    whoami          npm whoami
                    
                    Display npm username
                    
                    Usage:
                    npm whoami
                    
                    Options:
                    [--registry <registry>]
                    
                    Run "npm help whoami" for more info

Specify configs in the ini-formatted file:
    /some/config/file/.npmrc
or on the command line via: npm <command> --key=value

More configuration info: npm help config
Configuration fields: npm help 7 config

npm@{VERSION} {BASEDIR}
`
