# Ansible Setup

Clean, organized Ansible configuration following best practices.

## Structure

```
ansible/
├── ansible.cfg          # Ansible configuration
├── hosts.yml           # Inventory file
├── site.yml            # Main playbook
└── roles/              # Reusable roles
    ├── prerequisites/
    ├── docker/
    ├── github_cli/
    └── app_directory/
```

## Usage

### Run the full setup:
```bash
cd infrastructure/ansible
export GITHUB_TOKEN="your_token_here"
ansible-playbook site.yml
```

### Run specific roles:
```bash
ansible-playbook site.yml --tags docker
```

### Check what would change (dry run):
```bash
ansible-playbook site.yml --check
```

## Security Best Practices

### Encrypt sensitive data with ansible-vault:

1. Create a vault password file:
```bash
echo "your-vault-password" > .vault_pass
chmod 600 .vault_pass
```

2. Encrypt passwords in hosts.yml:
```bash
ansible-vault encrypt_string 'your_password' --name 'ansible_password'
```

3. Run playbook with vault:
```bash
ansible-playbook site.yml --vault-password-file .vault_pass
```

## Environment Variables

- `GITHUB_TOKEN`: GitHub personal access token for CLI authentication

## Old Playbooks

The old individual playbooks have been converted to roles:
- `install_prereqs.yml` → `roles/prerequisites`
- `install_docker.yml` → `roles/docker`
- `setup_app_dir.yml` → `roles/app_directory`
- `install_gh.yml` → `roles/github_cli`

You can safely delete the old playbook files.
