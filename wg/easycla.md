---
title: EasyCLA
sidebar_position: 5
---

You need to agree to the GraphQL Contributor Licensing Agreement in order to
contribute to GraphQL. Normally this is a simple process of signing a form and
clicking a few buttons - the EasyCLA bot guides you through the process.

## Something wrong

Except... Sometimes it isn't so easy. EasyCLA is very suspicious, and if you do
something a bit shifty... like using the wrong email address in your commits
(either as author or committer) then it might think you're an imposter and deny
your access.

Kevin
[had issues with EasyCLA](https://github.com/graphql/golden-path-wg/pull/40#issuecomment-5180908332)
and shared the steps he used for resolution (lightly edited):

1. (Believed optional) Fetch the latest code from the repository, and rebase
   your changes on top

   ```bash
   git fetch upstream
   git fetch origin
   git rebase upstream/main
   ## resolve conflicts, then... ##
   git rebase --continue
   ```

2. View the author and committer of the last 10 commits

   ```bash
   git log -10 --format="%H%n  Author:      %an <%ae>%n  Committer:   %cn <%ce>%n"
   ```

3. Optional: fix your `git` configuration (see below)

4. Update the author of the last commit to match what you told EasyCLA (if you
   have multiple commits you'll need to do this for each, consider using
   `git rebase -i upstream/main`)

   ```bash
   # If you fixed your git config in step 3:
   git commit --amend --reset-author --no-edit
   # Otherwise, explicitly specify the author:
   git commit --amend --author="Your Name <your_email@example.com>" --no-edit
   ```

5. Entirely optional: sign the commit (see below)

6. Verify author email of the last 10 commits

   ```bash
   git log -10 --format="%H%n  Author:      %an <%ae>%n  Committer:   %cn <%ce>%n"
   ```

7. Push the final results - updates PR and passes checks

   ```bash
   git push --force-with-lease origin branch_name_here
   ```

8. Click the link in the EasyCLA comment. If not signing as an individual, find
   your employer and click through until it said "you've accepted the CLA" or
   something like that.

9. If the automation didn't update, force push a whitespace change to trigger it
   again.

10. Hopefully everything green!

### Fix git configuration

1. Run `git config user.name` to see your current configured username
2. Run `git config user.email` to see your current configured email
3. If they don't fit what EasyCLA is expecting and you want to change them
   globally:
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your_email@example.com"
   ```

### Bonus: getting the green tick on your commits

This is entirely optional, but if you want the "Verified" badge next to your
commits, Kevin shares:

1. Update github config to use your ssh public key as a signing key
   1. open https://github.com/settings/keys
   1. choose `new SSH key`
   1. add existing key from `~/.ssh/id_ed25519.pub`
   1. select "signing key" as the "key type"

2. Update allowed signers locally so git log shows signatures are valid

   ```bash
   mkdir -p ~/.config/git
   echo "your_email@example.com $(cat ~/.ssh/id_ed25519.pub)" > ~/.config/git/allowed_signers
   git config --global gpg.ssh.allowedSignersFile ~/.config/git/allowed_signers
   ```

3. Sign the commit

   ```bash
   git commit --amend --no-edit --reset-author -S
   ```

4. Verify email and signature of the last commit

   ```bash
   git log -1 --show-signature
   ```
